import { eq } from "drizzle-orm";

import { $comments } from "~/data/Comment.schema";
import { $posts } from "~/data/Post.schema";
import { $users } from "~/data/User.schema";
import { getDatabase } from "~/data/database";

import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const database = await getDatabase();
  const userResult = await database
    .select()
    .from($users)
    .where(eq($users.id, Number(_arg.id)));

  if (userResult.length === 0) {
    return null;
  }
  if (userResult.length > 1) {
    throw new Error("More than one user found");
  }
  const [user] = userResult;
  const postResult = await database
    .select()
    .from($posts)
    .where(eq($posts.authorId, Number(user.id)));
  const commentResult = await database
    .select()
    .from($comments)
    .where(eq($comments.authorId, Number(user.id)));

  return {
    __typename: "User",
    id: user.id,
    name: user.name!,
    createdAt: user.createdAt,
    posts: postResult.map((post) => ({
      __typename: "Post",
      ...post,
      title: post.title!,
      body: post.body!,
      author: {
        __typename: "User",
        ...user,
        name: user.name!,
        createdAt: user.createdAt,
        comments: [],
        posts: [],
      },
      comments: [],
    })),
    comments: commentResult.map((comment) => ({
      __typename: "Comment",
      ...comment,
      body: comment.body!,
      post: null as any,
      author: {
        __typename: "User",
        ...user,
        name: user.name!,
        comments: [],
        posts: [],
      },
    })),
  };
};
