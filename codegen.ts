import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema/*.graphql",
  generates: {
    "src/resolvers": defineConfig({
      resolverRelativeTargetDir: "../../resolvers",
      resolverTypesPath: "./__generated__/ResolverTypes.ts",
      typeDefsFilePath: "./__generated__/TypeDefs.ts",
      resolverMainFile: "./__generated__/Resolvers.ts",
      scalarsModule: true,
      typesPluginsConfig: {
        strictScalars: true,
        nonOptionalTypename: true,
        futureProofEnums: true,
        futureProofUnions: true,
        enumsAsConst: true,
        immutableTypes: true,
        useTypeImports: true,
        contextType: "../GraphQLContext.ts#GraphQLContext",
      },
    }),
  },
};

export default config;
