import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { helloRoutes } from "./routes/hello";

const app = new Hono();

app.use("*", cors());
app.use("*", logger());
app.use("*", prettyJSON());

app.get("/", (c) => c.json({ message: "Hono API", status: "ok" }));

app.route("/api", helloRoutes);

app.notFound((c) => c.json({ error: "Not found" }, 404));
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: err.message }, 500);
});

const PORT = Number(process.env.PORT) || 3000;

export default {
  port: PORT,
  fetch: app.fetch,
};

console.log(`Server running on http://localhost:${PORT}`);
