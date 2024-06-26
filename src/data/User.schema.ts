import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const $users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
