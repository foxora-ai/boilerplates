import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./resolvers/index.js";
import dotenv from "dotenv";

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = Number(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`GraphQL server ready at ${url}`);
console.log(`Apollo Sandbox: ${url}`);
