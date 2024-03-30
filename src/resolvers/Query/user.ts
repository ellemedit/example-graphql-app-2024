import type { QueryResolvers } from "./../__generated__/ResolverTypes";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return {
    id: Number(_arg.id),
  };
};
