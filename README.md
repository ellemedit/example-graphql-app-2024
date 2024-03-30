# Example a GraphQL App in ES2024

We'll build ES2024 version of GraphQL app with Drizzle and ApolloServer.

I want to achieve two things:

1. maintainable code patterns for complex GraphQL type
2. injecting dependencies with Context

Dependencies:

- Node.js
- GraphQL (with Codegen)
- Drizzle, Postgres

Schema:

```graphql
schema { Query, Mutation }

type Query {
  post(id: ID!): Post
}

type Post {
  id: ID!
  title: String!
  body: String!
  createdAt: DateTime!
  author: User!
}

type User {
  id: ID!
  name: String!
  createdAt: DateTime!
}
```

App:

```ts
import Fastify from "fastify";
import { ApolloServer } from "@apollo/server";
import fastifyApollo, { ... } from "@as-integrations/fastify";

import { resolvers, typeDef } from "~/generated/...";

const fastify = Fastify();

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [fastifyApolloDrainPlugin(fastify)],
});

await apollo.start();
await fastify.register(fastifyApollo(apollo), {
  context: (request, reply) => ({
    headers: request.headers,
  }),
});
await fastify.listen();
```

First version of resolver implementation:

```ts
import { posts, users } from "~/database/schema";

export const postResolver = (parent, args, context) => {
  const { postId } = args;
  const [post] = await database.select().from(posts);
  if (post == null) {
    return null;
  }
  const [author] = await database
    .select()
    .from(users)
    .where(eq(users.id, post.authorId));
  if (author == null) {
    throw new Error("author must be provided");
  }
  return {
    ...post,
    author,
  };
};
```

What's the problem with this?

`postResolver` handles user entity, which is not related to `Post` type.
This means that more tasks should be done in `postResolver` if we extend `Post` type or add more related entities.

I'll show how this will be if we don't break the code into smaller pieces:

```graphql
extend type Post {
  # adding comments to Post type
  comments: [Comment!]!
}

type Comment {
  id: ID!
  # comments has relation to user
  author: User!
  body: String!
  createdAt: DateTime!
}
```

Then, we'll have to handle comments in `postResolver`.

```ts
export const postResolver = (parent, args, context) => {
  const { postId } = args;
  const [post] = database.select().from(posts);
  if (post == null) {
    return null;
  }
  const [author] = database
    .select()
    .from(users)
    .where(eq(users.id, post.authorId));
  if (author == null) {
    throw new Error("author must be provided");
  }
  const postCommentsRows = database
    .select()
    .from(comments)
    .where(eq(comments.postId, post.id))
    .orderBy(desc(comments.createdAt));
  const postComments = await Promise.all(
    postCommentsRows.map(async (comment) => {
      const [author] = database
        .select()
        .from(users)
        .where(eq(users.id, comment.authorId));
      if (author == null) {
        throw new Error("author must be provided");
      }
      return { ...comment, author };
    }),
  );
  return {
    ...post,
    comments: postComments,
    author,
  };
};
```

We can use custom type mapper feature of GraphQL codegen to divide this.

```ts
export interface PostMapper {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  authorId: string;
  commentIds: Array<string>;
}
```

Then we can do like this:

```ts
export const postResolver = (parent, args, context) => {
  const { postId } = args;
  const [post] = await database.select().from(posts);
  if (post == null) {
    return null;
  }
  const postCommentIds = database
    .select({ id: comments.id })
    .from(comments)
    .where(eq(comments.postId, post.id))
    .orderBy(desc(comments.createdAt));
  return {
    ...post,
    commentIds: postCommentIds.map((comment) => comment.id),
  };
};

export const userResolver = (parent, args, context) => {
  const [user] = await database
    .select()
    .from(users)
    .where(eq(users.id, parent.authorId));
  return user;
};

export const commentResolver = (parent, args, context) => {
  return await database
    .select()
    .from(comments)
    .where(eq(comments.id, parent.id));
};
```
