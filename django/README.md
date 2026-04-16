# Django Boilerplate

Fullstack Django REST API with Django REST Framework, CORS, and SQLite.

## Stack

- **Django 5.1** — web framework
- **Django REST Framework** — REST API toolkit
- **django-cors-headers** — CORS support
- **SQLite** — default DB (swap for Postgres in prod)
- **Python 3.12+**

## Getting Started

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/hello/` | Hello message |
| POST | `/api/hello/name/` | Hello with name (`{ name }`) |
| GET | `/admin/` | Django admin panel |

## Project Structure

```
core/
  settings.py     # Django settings (split into two parts)
  urls.py         # Root URL config
  wsgi.py         # WSGI entry point
api/
  views.py        # API view functions
  urls.py         # API URL patterns
manage.py         # Django CLI
requirements.txt
```
