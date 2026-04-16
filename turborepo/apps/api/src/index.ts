import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();
app.use("*", cors());
app.use("*", logger());
app.get("/", (c) => c.json({ message: "API running", status: "ok" }));
app.get("/api/hello", (c) => c.json({ message: "Hello from monorepo API!" }));

export default { port: 3001, fetch: app.fetch };
console.log("API running on http://localhost:3001");
