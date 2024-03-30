import { $comments } from "~/data/Comment.schema";
import { getDatabase } from "~/data/database";

import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const comments: NonNullable<QueryResolvers["comments"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const database = await getDatabase();
  const result = await database
    .select({
      id: $comments.id,
    })
    .from($comments)
    .limit(5);

  return result;
};
