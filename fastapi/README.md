# FastAPI Boilerplate

Async Python REST API with FastAPI, Pydantic v2, auto Swagger docs, and CORS.

## Stack

- **FastAPI** — async web framework
- **Uvicorn** — ASGI server
- **Pydantic v2** — data validation + settings
- **Python 3.12+**

## Getting Started

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python main.py
```

## Scripts

| Command | Description |
|---------|-------------|
| `python main.py` | Start server at localhost:8000 |
| `uvicorn app.main:app --reload` | Dev with hot reload |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/api/hello` | Hello message |
| POST | `/api/hello` | Hello with name (`{ name }`) |
| GET | `/docs` | Swagger UI |
| GET | `/redoc` | ReDoc |

## Project Structure

```
app/
  main.py          # FastAPI app + middleware
  core/
    config.py      # Pydantic settings
  models/
    hello.py       # Request/response schemas
  routers/
    hello.py       # Route handlers
main.py            # Entry point (uvicorn runner)
requirements.txt
```
