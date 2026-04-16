import { Elysia, t } from "elysia";

export const helloRoutes = new Elysia({ prefix: "/api" })
  .get("/hello", () => ({ message: "Hello from Elysia!" }))
  .post(
    "/hello",
    ({ body }) => ({ message: `Hello, ${body.name}!` }),
    {
      body: t.Object({ name: t.String() }),
    }
  );
