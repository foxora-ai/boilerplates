# SvelteKit Boilerplate

Fullstack SvelteKit starter with TypeScript and Tailwind CSS v4.

## Stack

- **SvelteKit 2** — fullstack meta-framework
- **Svelte 5** — reactive UI with runes
- **Vite 6** — build tool
- **TypeScript 5** — strict mode
- **Tailwind CSS v4** — via @tailwindcss/vite

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at localhost:5173 |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run check` | Svelte type check |

## Project Structure

```
src/
  routes/
    +layout.svelte     # Root layout
    +page.svelte       # Home page
    api/hello/
      +server.ts       # Example API route (GET /api/hello)
  lib/
    utils.ts           # cn() and helpers
  app.css              # Global styles + Tailwind
static/                # Static assets
```

## Path Alias

`$lib` maps to `src/lib` — use like `import { cn } from "$lib/utils"`.
