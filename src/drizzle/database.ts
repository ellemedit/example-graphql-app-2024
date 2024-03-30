import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const sql = neon(process.env.DATABASE_CONNECTION_URL!);
const database = drizzle(sql);

let migrated = false;

export async function getDatabase() {
  if (!migrated) {
    await migrate(database, { migrationsFolder: "drizzle" });
    migrated = true;
  }
  return database;
}
