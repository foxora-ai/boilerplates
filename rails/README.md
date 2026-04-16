# Rails Boilerplate

API-only Ruby on Rails app with SQLite and JSON responses.

## Stack

- **Rails 7.2** — API mode
- **Puma** — web server
- **SQLite** — default DB
- **Ruby 3.3+**

## Getting Started

```bash
bundle install
rails db:create db:migrate
rails server
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/hello` | Hello message |
| POST | `/api/hello` | Hello with name (`{ name }`) |
| GET | `/up` | Health check |

## Project Structure

```
app/
  controllers/
    application_controller.rb
    hello_controller.rb
config/
  routes.rb
  application.rb
Gemfile
```
