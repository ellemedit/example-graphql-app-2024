import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { $users } from "./User.schema";

export const $posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 512 }).notNull(),
  body: text("body").notNull(),
  authorId: integer("author_id")
    .references(() => $users.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
