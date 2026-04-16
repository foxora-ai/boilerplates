import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { helloRoutes } from "./routes/hello";

const PORT = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      documentation: {
        info: {
          title: "Bun + Elysia API",
          version: "0.1.0",
        },
      },
    })
  )
  .get("/", () => ({ message: "Bun + Elysia API", status: "ok" }))
  .use(helloRoutes)
  .listen(PORT);

console.log(`Server running on http://localhost:${PORT}`);
console.log(`Swagger docs at http://localhost:${PORT}/swagger`);

export type App = typeof app;
