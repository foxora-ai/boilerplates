# Laravel Boilerplate

Fullstack PHP framework with Eloquent ORM, routing, and REST API.

## Stack

- **Laravel 11** — PHP fullstack framework
- **PHP 8.3+**
- **SQLite** — default (swap for MySQL/Postgres in prod)

## Getting Started

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/api/hello` | Hello message |
| POST | `/api/hello` | Hello with name (`{ name }`) |

## Project Structure

```
app/
  Http/
    Controllers/
      HelloController.php   # API controller
routes/
  web.php                   # Route definitions
.env.example                # Environment config template
composer.json               # PHP dependencies
```
