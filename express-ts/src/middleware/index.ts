import { Request, Response, NextFunction } from "express";

export function requestLogger(req: Request, _res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Internal server error" });
}
