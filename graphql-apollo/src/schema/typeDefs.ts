export const typeDefs = `#graphql
  type Query {
    hello: HelloResponse!
    greet(name: String!): HelloResponse!
    items(limit: Int): [Item!]!
  }

  type Mutation {
    createItem(title: String!): Item!
  }

  type HelloResponse {
    message: String!
  }

  type Item {
    id: ID!
    title: String!
    createdAt: String!
  }
`;
