# Foxora Boilerplates

Official boilerplate repository for [Foxora](https://foxora.ai) — AI-powered coding IDE.

When you create a new project in Foxora, it clones the relevant template using:

```bash
npx degit foxora-templates/boilerplates/<template> <project-path>
```

---

## JavaScript / TypeScript

### React
| Template | Description | Tags |
|----------|-------------|------|
| [`nextjs`](./nextjs) | Next.js 15 + App Router + Tailwind v4 | fullstack |
| [`vite-react`](./vite-react) | Vite 6 + React 19 + Tailwind v4 | frontend |
| [`remix`](./remix) | Remix + React + Tailwind v4 | fullstack |

### Vue
| Template | Description | Tags |
|----------|-------------|------|
| [`nuxt3`](./nuxt3) | Nuxt 3 + Vue 3 + Tailwind | fullstack |
| [`vite-vue`](./vite-vue) | Vite + Vue 3 + Tailwind v4 | frontend |

### Svelte
| Template | Description | Tags |
|----------|-------------|------|
| [`sveltekit`](./sveltekit) | SvelteKit 2 + Svelte 5 + Tailwind v4 | fullstack |
| [`vite-svelte`](./vite-svelte) | Vite + Svelte 5 + Tailwind v4 | frontend |

### Astro
| Template | Description | Tags |
|----------|-------------|------|
| [`astro`](./astro) | Astro 5 static + Tailwind | frontend |
| [`astro-react`](./astro-react) | Astro + React islands + Tailwind | frontend |

### Other Frameworks
| Template | Description | Tags |
|----------|-------------|------|
| [`solidjs`](./solidjs) | SolidJS + Vite + Tailwind v4 | frontend |
| [`vite-vanilla-ts`](./vite-vanilla-ts) | Vite + Vanilla TypeScript + Tailwind | frontend |

### Node.js / Bun Backend
| Template | Description | Tags |
|----------|-------------|------|
| [`express-ts`](./express-ts) | Express 4 + TypeScript + CORS | backend |
| [`fastify`](./fastify) | Fastify 5 + TypeScript + Swagger | backend |
| [`bun-elysia`](./bun-elysia) | Bun + Elysia + Swagger | backend |
| [`hono`](./hono) | Hono 4 + Zod + Edge-ready | backend |
| [`nestjs`](./nestjs) | NestJS 11 + TypeScript + DI | backend |

### Monorepo / Tooling
| Template | Description | Tags |
|----------|-------------|------|
| [`turborepo`](./turborepo) | Turborepo + Next.js + Hono API + shared UI | monorepo |
| [`npm-library`](./npm-library) | TypeScript library + tsup + Vitest | library |

---

## Python
| Template | Description | Tags |
|----------|-------------|------|
| [`fastapi`](./fastapi) | FastAPI + Pydantic v2 + Uvicorn | backend |
| [`django`](./django) | Django 5 + DRF + SQLite | fullstack |
| [`flask`](./flask) | Flask 3 + CORS + blueprints | backend |
| [`streamlit`](./streamlit) | Streamlit + Plotly + multipage | data app |
| [`python-cli`](./python-cli) | Typer + Rich CLI tool | CLI |
| [`ml-starter`](./ml-starter) | PyTorch + scikit-learn + Jupyter | ML/AI |
| [`langchain`](./langchain) | LangChain + OpenAI + RAG + Chroma | LLM/AI |

---

## Rust
| Template | Description | Tags |
|----------|-------------|------|
| [`axum`](./axum) | Axum + Tokio + Tower + CORS | backend |
| [`actix-web`](./actix-web) | Actix-Web 4 + CORS + Tracing | backend |
| [`rust-cli`](./rust-cli) | Clap v4 + colored terminal | CLI |

---

## Go
| Template | Description | Tags |
|----------|-------------|------|
| [`gin`](./gin) | Gin + CORS + structured handlers | backend |
| [`fiber`](./fiber) | Go Fiber v2 + CORS + logger | backend |
| [`go-cli`](./go-cli) | Cobra + color output | CLI |

---

## PHP
| Template | Description | Tags |
|----------|-------------|------|
| [`laravel`](./laravel) | Laravel 11 + DRF + SQLite | fullstack |

---

## Ruby
| Template | Description | Tags |
|----------|-------------|------|
| [`rails`](./rails) | Rails 7.2 API mode + SQLite | backend |

---

## Java / Kotlin
| Template | Description | Tags |
|----------|-------------|------|
| [`spring-boot`](./spring-boot) | Spring Boot 3.4 + Validation + Swagger | backend |
| [`ktor`](./ktor) | Ktor 3 + Kotlin + serialization | backend |
| [`android-kotlin`](./android-kotlin) | Jetpack Compose + Material 3 + MVVM | mobile |

---

## Mobile / Cross-platform
| Template | Description | Tags |
|----------|-------------|------|
| [`react-native`](./react-native) | Expo 52 + Expo Router + TypeScript | mobile |
| [`flutter`](./flutter) | Flutter + Riverpod + Material 3 | mobile |

---

## Other Languages
| Template | Description | Tags |
|----------|-------------|------|
| [`dotnet`](./dotnet) | ASP.NET Core 9 + Swagger + CORS | backend |
| [`elixir-phoenix`](./elixir-phoenix) | Phoenix 1.7 + API mode + CORS | fullstack |

---

## Usage in Foxora

Foxora internally runs:

```typescript
import degit from "degit";

const emitter = degit(`foxora-templates/boilerplates/${templateId}`, {
  cache: false,
  force: true,
});

await emitter.clone(projectPath);
```

---

## Contributing

Each template follows these standards:

- Minimal but complete — no auth, no DB by default (standard tier)
- Tailwind v4 included for all frontend/fullstack templates
- `.env.example` for all templates that need environment variables
- `README.md` in every template with getting-started instructions
- Sample API route (`GET /api/hello` + `POST /api/hello`) in every backend
- TypeScript strict mode in all JS/TS templates

---

*Maintained by the Foxora team · [foxora.ai](https://foxora.ai)*
