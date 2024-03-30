import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { posts } from "./Post.schema";
import { users } from "./User.schema";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  body: varchar("body", { length: 256 }),
  postId: integer("post_id").references(() => posts.id),
  authorId: integer("author_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
