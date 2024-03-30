import { $posts } from "~/data/Post.schema";
import { getDatabase } from "~/data/database";

import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const posts: NonNullable<QueryResolvers["posts"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const database = await getDatabase();
  const posts = await database
    .select({
      id: $posts.id,
    })
    .from($posts)
    .limit(5);

  return posts;
};
