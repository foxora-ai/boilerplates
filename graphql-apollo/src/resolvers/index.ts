const items: { id: string; title: string; createdAt: string }[] = [];
let nextId = 1;

export const resolvers = {
  Query: {
    hello: () => ({ message: "Hello from Apollo GraphQL!" }),
    greet: (_: unknown, { name }: { name: string }) => ({
      message: `Hello, ${name}!`,
    }),
    items: (_: unknown, { limit = 10 }: { limit?: number }) =>
      items.slice(0, limit),
  },
  Mutation: {
    createItem: (_: unknown, { title }: { title: string }) => {
      const item = {
        id: String(nextId++),
        title,
        createdAt: new Date().toISOString(),
      };
      items.push(item);
      return item;
    },
  },
};
