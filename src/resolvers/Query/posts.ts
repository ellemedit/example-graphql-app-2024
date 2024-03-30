import { eq } from "drizzle-orm";

import { $posts } from "~/data/Post.schema";
import { $users } from "~/data/User.schema";
import { getDatabase } from "~/data/database";

import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const posts: NonNullable<QueryResolvers["posts"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const database = await getDatabase();
  const result = await database
    .select({
      post: $posts,
      author: $users,
    })
    .from($posts)
    .innerJoin($users, eq($posts.authorId, $users.id));

  return result.map(({ post, author }) => ({
    __typename: "Post",
    id: post.id,
    title: post.title!,
    body: post.body!,
    createdAt: post.createdAt,
    author: {
      __typename: "User",
      id: author.id,
      name: author.name!,
      comments: [],
      posts: [],
    },
    comments: [],
  }));
};
