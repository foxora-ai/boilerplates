import { Router } from "express";

export const helloRouter = Router();

helloRouter.get("/", (_req, res) => {
  res.json({ message: "Hello from Express API!" });
});
