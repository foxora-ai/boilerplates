import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { helloRouter } from "./routes/hello";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.json({ message: "Express + TypeScript API", status: "ok" });
});

app.use("/api/hello", helloRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
