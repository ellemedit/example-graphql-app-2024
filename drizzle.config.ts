import "dotenv/config";

import type { Config } from "drizzle-kit";

export default {
  schema: "./src/data/*.schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_CONNECTION_URL!,
  },
} satisfies Config;
