# Nuxt 3 Boilerplate

Fullstack Vue meta-framework with SSR/SSG, TypeScript, and Tailwind CSS.

## Stack

- **Nuxt 3** — Vue fullstack meta-framework
- **Vue 3** — Composition API
- **TypeScript 5** — strict mode
- **Tailwind CSS** — via @nuxtjs/tailwindcss
- **Nitro** — server engine (API routes)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm run generate` | Static site generation |
| `npm run preview` | Preview build |

## Project Structure

```
pages/
  index.vue          # Home page
  about.vue          # About page
components/          # Auto-imported components
server/
  api/
    hello.get.ts     # GET /api/hello
utils/
  index.ts           # Shared utilities (auto-imported)
nuxt.config.ts       # Nuxt configuration
```

## Notes

- All components in `components/` are auto-imported
- All utils in `utils/` are auto-imported
- API routes live in `server/api/`
