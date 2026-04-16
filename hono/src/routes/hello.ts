import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const helloRoutes = new Hono();

helloRoutes.get("/hello", (c) => {
  return c.json({ message: "Hello from Hono!" });
});

helloRoutes.post(
  "/hello",
  zValidator("json", z.object({ name: z.string() })),
  (c) => {
    const { name } = c.req.valid("json");
    return c.json({ message: `Hello, ${name}!` });
  }
);
