import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import dotenv from "dotenv";
import { helloRoutes } from "./routes/hello";

dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors);

await app.register(swagger, {
  openapi: {
    info: { title: "Fastify API", version: "0.1.0" },
  },
});

await app.register(swaggerUi, { routePrefix: "/docs" });

app.get("/", async () => ({ message: "Fastify + TypeScript API", status: "ok" }));

await app.register(helloRoutes, { prefix: "/api" });

const PORT = Number(process.env.PORT) || 3000;

try {
  await app.listen({ port: PORT, host: "0.0.0.0" });
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/docs`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
