# Vite + React Boilerplate

A minimal but production-ready React SPA starter with Vite, TypeScript, and Tailwind CSS v4.

## Stack

- **React 19** — UI library
- **Vite 6** — build tool + dev server
- **TypeScript 5** — strict mode enabled
- **Tailwind CSS v4** — utility-first CSS (via @tailwindcss/vite plugin)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run type-check` | TypeScript check without emitting |
| `npm run lint` | ESLint check |

## Project Structure

```
src/
  components/   # Shared UI components
  lib/
    utils.ts    # cn() helper and utilities
  App.tsx       # Root component
  main.tsx      # Entry point
  index.css     # Global styles + Tailwind import
```

## Path Alias

`@/` maps to `src/` — use like `import { cn } from "@/lib/utils"`.
