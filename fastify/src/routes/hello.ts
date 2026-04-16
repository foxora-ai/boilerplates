import type { FastifyPluginAsync } from "fastify";

export const helloRoutes: FastifyPluginAsync = async (app) => {
  app.get("/hello", async () => {
    return { message: "Hello from Fastify!" };
  });

  app.post<{ Body: { name: string } }>(
    "/hello",
    {
      schema: {
        body: {
          type: "object",
          required: ["name"],
          properties: { name: { type: "string" } },
        },
      },
    },
    async (req) => {
      return { message: `Hello, ${req.body.name}!` };
    }
  );
};
