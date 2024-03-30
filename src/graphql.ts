import { createSchema, createYoga } from "graphql-yoga";

import { resolvers } from "./resolvers/generated/Resolvers";
import { typeDefs } from "./resolvers/generated/TypeDefs";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
});

const server = Bun.serve({
  fetch: yoga,
});

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
);
