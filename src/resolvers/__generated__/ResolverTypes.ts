import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";

export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  Void: { input: void; output: void };
};

export type Comment = {
  readonly __typename: "Comment";
  readonly author: User;
  readonly content: Scalars["String"]["output"];
  readonly createdAt: Scalars["DateTime"]["output"];
  readonly id: Scalars["ID"]["output"];
  readonly post: Post;
};

export type Mutation = {
  readonly __typename: "Mutation";
  readonly test?: Maybe<Scalars["Void"]["output"]>;
};

export type Post = {
  readonly __typename: "Post";
  readonly author: User;
  readonly comments: ReadonlyArray<Comment>;
  readonly content: Scalars["String"]["output"];
  readonly createdAt: Scalars["DateTime"]["output"];
  readonly id: Scalars["ID"]["output"];
  readonly title: Scalars["String"]["output"];
};

export type Query = {
  readonly __typename: "Query";
  readonly comment?: Maybe<Comment>;
  readonly comments: ReadonlyArray<Comment>;
  readonly post?: Maybe<Post>;
  readonly posts: ReadonlyArray<Post>;
  readonly user?: Maybe<User>;
};

export type QuerycommentArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerypostArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  readonly __typename: "User";
  readonly comments: ReadonlyArray<Comment>;
  readonly id: Scalars["ID"]["output"];
  readonly name: Scalars["String"]["output"];
  readonly posts: ReadonlyArray<Post>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  Void: ResolverTypeWrapper<Scalars["Void"]["output"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  String: Scalars["String"]["output"];
  ID: Scalars["ID"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  Mutation: {};
  Post: Post;
  Query: {};
  User: User;
  Void: Scalars["Void"]["output"];
  Boolean: Scalars["Boolean"]["output"];
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"],
> = {
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  post?: Resolver<ResolversTypes["Post"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  test?: Resolver<Maybe<ResolversTypes["Void"]>, ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Post"] = ResolversParentTypes["Post"],
> = {
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  comments?: Resolver<
    ReadonlyArray<ResolversTypes["Comment"]>,
    ParentType,
    ContextType
  >;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  comment?: Resolver<
    Maybe<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycommentArgs, "id">
  >;
  comments?: Resolver<
    ReadonlyArray<ResolversTypes["Comment"]>,
    ParentType,
    ContextType
  >;
  post?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypostArgs, "id">
  >;
  posts?: Resolver<
    ReadonlyArray<ResolversTypes["Post"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  comments?: Resolver<
    ReadonlyArray<ResolversTypes["Comment"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  posts?: Resolver<
    ReadonlyArray<ResolversTypes["Post"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Void"], any> {
  name: "Void";
}

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Void?: GraphQLScalarType;
};
