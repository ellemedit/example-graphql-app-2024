import type { QueryResolvers } from "./../generated/ResolverTypes";

export const posts: NonNullable<QueryResolvers["posts"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.posts resolver logic here */
  return [];
};
