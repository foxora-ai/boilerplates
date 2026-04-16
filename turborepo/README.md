# Turborepo Monorepo Boilerplate

Full-stack monorepo with Next.js web app, Hono API, and shared UI packages.

## Stack

- **Turborepo 2** — monorepo task runner + caching
- **Next.js 15** — web frontend (`apps/web`)
- **Hono** — API backend (`apps/api`)
- **@repo/ui** — shared React component library
- **@repo/config-ts** — shared TypeScript configs
- **TypeScript 5** — strict mode throughout

## Getting Started

```bash
npm install
npm run dev        # starts all apps in parallel
```

## Apps & Packages

| Package | Path | Port | Description |
|---------|------|------|-------------|
| `@repo/web` | `apps/web` | 3000 | Next.js frontend |
| `@repo/api` | `apps/api` | 3001 | Hono API backend |
| `@repo/ui` | `packages/ui` | — | Shared UI components |
| `@repo/config-ts` | `packages/config-ts` | — | Shared TS configs |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all apps |
| `npm run build` | Build all apps |
| `npm run type-check` | Type-check all packages |
| `npm run lint` | Lint all packages |

## Structure

```
apps/
  web/              # Next.js 15 + Tailwind
  api/              # Hono API
packages/
  ui/               # Shared components (Button, Card)
  config-ts/        # base.json, nextjs.json TS configs
turbo.json          # Task pipeline config
package.json        # Root workspace config
```
