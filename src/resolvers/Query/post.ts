import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const post: NonNullable<QueryResolvers["post"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return {
    id: Number(_arg.id),
  };
};
