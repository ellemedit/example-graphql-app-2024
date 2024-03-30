import { createSchema, createYoga } from "graphql-yoga";

import { createGraphQLContext } from "./resolvers/GraphQLContext";
import { resolvers } from "./resolvers/__generated__/Resolvers";
import { typeDefs } from "./resolvers/__generated__/TypeDefs";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
  context: () => {
    return createGraphQLContext();
  },
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
