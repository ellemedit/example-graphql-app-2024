import type { CommentResolvers } from "./__generated__/ResolverTypes";

export const Comment: CommentResolvers = {
  id: (parent) => {
    return parent.id;
  },
  author: async (parent, _, context) => {
    const comment = await context.loaders.comment.load(parent.id);
    return { id: comment.authorId };
  },
  body: async (parent, _, context) => {
    const comment = await context.loaders.comment.load(parent.id);
    return comment.body;
  },
  createdAt: async (parent, _, context) => {
    const comment = await context.loaders.comment.load(parent.id);
    return comment.createdAt;
  },
  post: async (parent, _, context) => {
    const comment = await context.loaders.comment.load(parent.id);
    return { id: comment.postId };
  },
};
