# npm Library Boilerplate

Production-ready TypeScript library with dual ESM/CJS output, type declarations, and Vitest tests.

## Stack

- **tsup** — zero-config bundler (ESM + CJS + .d.ts)
- **Vitest** — fast unit testing
- **TypeScript 5** — strict mode
- **Dual output** — works in both ESM and CommonJS environments

## Getting Started

```bash
npm install
npm run build       # outputs to dist/
npm run test        # run tests
npm run dev         # watch mode
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Bundle to ESM + CJS + types |
| `npm run dev` | Watch + rebuild on change |
| `npm run test` | Run Vitest tests |
| `npm run type-check` | TypeScript check |

## Publishing

```bash
npm run build
npm publish --access public
```

## Project Structure

```
src/
  index.ts          # Library entry — export everything here
tests/
  index.test.ts     # Vitest unit tests
tsup.config.ts      # Bundle config
tsconfig.json       # TypeScript config
package.json        # exports, main, module, types fields
```

## What's included

`cn`, `formatNumber`, `clamp`, `sleep`, `debounce`, `capitalize` — replace with your own utilities.
