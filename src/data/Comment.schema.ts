import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { $posts } from "./Post.schema";
import { $users } from "./User.schema";

export const $comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  body: text("body"),
  postId: integer("post_id").references(() => $posts.id),
  authorId: integer("author_id").references(() => $users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
