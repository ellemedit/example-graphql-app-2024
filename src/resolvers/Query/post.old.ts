import { eq } from "drizzle-orm";

import { $posts } from "~/data/Post.schema";
import { $users } from "~/data/User.schema";
import { getDatabase } from "~/data/database";

import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const post: NonNullable<QueryResolvers["post"]> = async (
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
    .where(eq($posts.id, Number(_arg.id)))
    .innerJoin($users, eq($posts.authorId, $users.id));

  if (result.length === 0) {
    return null;
  }
  if (result.length > 1) {
    throw new Error("More than one post found");
  }
  const [{ post, author }] = result;

  return {
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
  };
};
