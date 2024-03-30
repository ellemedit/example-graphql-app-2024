import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION_URL!,
});
const database = drizzle(pool, { logger: true });

let migrated = false;

export async function getDatabase() {
  if (!migrated) {
    await migrate(database, { migrationsFolder: "drizzle" });
    migrated = true;
  }
  return database;
}
