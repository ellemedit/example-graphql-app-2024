import type { QueryResolvers } from "./../generated/ResolverTypes";

export const comments: NonNullable<QueryResolvers["comments"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.comments resolver logic here */
  return [];
};
