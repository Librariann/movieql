import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";
import typeDefs from "./schema.graphql";

const typeDefinitions = typeDefs;
const resolverses = resolvers;

export const schema = makeExecutableSchema({
  resolvers: [resolverses],
  typeDefs: [typeDefinitions],
});
