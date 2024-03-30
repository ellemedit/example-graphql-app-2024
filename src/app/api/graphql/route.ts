import { createSchema, createYoga } from "graphql-yoga";

import { createGraphQLContext } from "~/resolvers/GraphQLContext";
import { resolvers } from "~/resolvers/__generated__/Resolvers";
import { typeDefs } from "~/resolvers/__generated__/TypeDefs";

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: () => {
    return createGraphQLContext();
  },
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
