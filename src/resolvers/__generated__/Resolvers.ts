/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import { DateTimeResolver, VoidResolver } from "graphql-scalars";

import { Comment } from "./../Comment";
import { test as Mutation_test } from "./../Mutation/test";
import { Post } from "./../Post";
import { comment as Query_comment } from "./../Query/comment";
import { comments as Query_comments } from "./../Query/comments";
import { post as Query_post } from "./../Query/post";
import { posts as Query_posts } from "./../Query/posts";
import { user as Query_user } from "./../Query/user";
import { User } from "./../User";
import type { Resolvers } from "./ResolverTypes";

export const resolvers: Resolvers = {
  Query: {
    comment: Query_comment,
    comments: Query_comments,
    post: Query_post,
    posts: Query_posts,
    user: Query_user,
  },
  Mutation: { test: Mutation_test },

  Comment: Comment,
  Post: Post,
  User: User,
  DateTime: DateTimeResolver,
  Void: VoidResolver,
};
