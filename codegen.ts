import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema/*.graphql",
  generates: {
    "src/resolvers": defineConfig({
      resolverRelativeTargetDir: "../../resolvers",
      resolverTypesPath: "./generated/ResolverTypes.ts",
      typeDefsFilePath: "./generated/TypeDefs.ts",
      resolverMainFile: "./generated/Resolvers.ts",
      scalarsModule: true,
      typesPluginsConfig: {
        strictScalars: true,
        nonOptionalTypename: true,
        futureProofEnums: true,
        futureProofUnions: true,
        enumsAsConst: true,
        immutableTypes: true,
        useTypeImports: true,
      },
    }),
  },
};

export default config;
