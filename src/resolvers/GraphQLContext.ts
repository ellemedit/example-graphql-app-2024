import DataLoader from "dataloader";
import { inArray } from "drizzle-orm";

import { $comments } from "~/data/Comment.schema";
import { $posts } from "~/data/Post.schema";
import { $users } from "~/data/User.schema";
import { getDatabase } from "~/data/database";

export interface GraphQLContext {
  loaders: ReturnType<typeof createDataLoaders>;
}

export function createGraphQLContext() {
  const loaders = createDataLoaders();
  return {
    loaders,
  };
}

function createDataLoaders() {
  return {
    user: new DataLoader(async (ids: readonly number[]) => {
      const database = await getDatabase();
      return database
        .select()
        .from($users)
        .where(inArray($users.id, ids as number[]));
    }),
    post: new DataLoader(async (ids: readonly number[]) => {
      const database = await getDatabase();
      return database
        .select()
        .from($posts)
        .where(inArray($posts.id, ids as number[]));
    }),
    comment: new DataLoader(async (ids: readonly number[]) => {
      const database = await getDatabase();
      return database
        .select()
        .from($comments)
        .where(inArray($comments.id, ids as number[]));
    }),
  };
}
