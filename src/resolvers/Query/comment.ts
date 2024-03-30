import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const comment: NonNullable<QueryResolvers["comment"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return {
    id: Number(_arg.id),
  };
};
