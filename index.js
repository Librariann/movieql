import { createServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import { schema } from "./graphql/schema";

const server = new createServer({ schema });

server.start(() => console.log("Graphql Server Running"));
