import { createSchema, createYoga } from "graphql-yoga";

import { resolvers } from "~/resolvers/generated/Resolvers";
import { typeDefs } from "~/resolvers/generated/TypeDefs";

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
