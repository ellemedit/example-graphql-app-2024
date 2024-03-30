import { eq } from "drizzle-orm";

import { $comments } from "~/data/Comment.schema";
import { $posts } from "~/data/Post.schema";
import { getDatabase } from "~/data/database";

import type { UserResolvers } from "./__generated__/ResolverTypes";

export const User: UserResolvers = {
  id: (parent) => {
    return parent.id;
  },
  comments: async (parent, _, context) => {
    const database = await getDatabase();
    const comments = await database
      .select({
        id: $comments.id,
      })
      .from($comments)
      .where(eq($comments.authorId, parent.id))
      .limit(5);
    return comments;
  },
  name: async (parent, _, context) => {
    const user = await context.loaders.user.load(parent.id);
    return user.name;
  },
  posts: async (parent, _, context) => {
    const database = await getDatabase();
    const posts = await database
      .select({
        id: $posts.id,
      })
      .from($posts)
      .where(eq($posts.authorId, parent.id))
      .limit(5);
    return posts;
  },
};
