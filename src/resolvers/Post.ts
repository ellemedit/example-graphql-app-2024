import { eq } from "drizzle-orm";

import { $comments } from "~/data/Comment.schema";
import { getDatabase } from "~/data/database";

import type { PostResolvers } from "./__generated__/ResolverTypes";

export const Post: PostResolvers = {
  id: (parent) => {
    return parent.id;
  },
  author: async (parent, _, context) => {
    const post = await context.loaders.post.load(parent.id);
    return { id: post.authorId };
  },
  title: async (parent, _, context) => {
    const post = await context.loaders.post.load(parent.id);
    return post.title;
  },
  body: async (parent, _, context) => {
    const post = await context.loaders.post.load(parent.id);
    return post.body;
  },
  comments: async (parent) => {
    const database = await getDatabase();
    const comments = await database
      .select({
        id: $comments.id,
      })
      .from($comments)
      .where(eq($comments.postId, parent.id))
      .limit(5);
    return comments;
  },
  createdAt: async (parent, _, context) => {
    const post = await context.loaders.post.load(parent.id);
    return post.createdAt;
  },
};
