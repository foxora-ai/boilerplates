# Payload CMS Boilerplate

Headless CMS with Next.js 15, Payload 3, SQLite, and Lexical rich text.

## Stack

- **Payload 3** — headless CMS
- **Next.js 15** — frontend + admin UI host
- **SQLite** — default DB (swap for Postgres in prod)
- **Lexical** — rich text editor

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

Admin panel: `http://localhost:3000/admin`

## Collections

| Collection | Description |
|------------|-------------|
| `posts` | Blog posts with rich text + status |
| `users` | Auth users with roles |
| `media` | File/image uploads |

## REST API

Payload auto-generates REST endpoints:
- `GET /api/posts` — list posts
- `GET /api/posts/:id` — single post
- `POST /api/posts` — create post

## Project Structure

```
src/
  payload.config.ts     # Payload config
  collections/
    Posts.ts
    Users.ts
    Media.ts
  app/
    (frontend)/         # Public Next.js pages
next.config.ts
```
