# Bun + Elysia Boilerplate

Ultra-fast Bun runtime API with Elysia framework, TypeScript, CORS, and Swagger docs built-in.

## Stack

- **Bun** — fast JS runtime (replaces Node.js)
- **Elysia** — type-safe web framework built for Bun
- **@elysiajs/cors** — CORS plugin
- **@elysiajs/swagger** — auto Swagger/OpenAPI docs
- **TypeScript 5** — strict mode

## Getting Started

```bash
bun install
bun run dev
```

> Requires Bun installed: `curl -fsSL https://bun.sh/install | bash`

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Dev server with hot reload at localhost:3000 |
| `bun run start` | Production server |
| `bun run type-check` | TypeScript check |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/api/hello` | Hello message |
| POST | `/api/hello` | Hello with name (body: `{ name }`) |
| GET | `/swagger` | Swagger UI docs |

## Project Structure

```
src/
  index.ts          # App entry + Elysia instance
  routes/
    hello.ts        # Example route group
  middleware/
    logger.ts       # Request logger plugin
  lib/              # Shared utilities
```
