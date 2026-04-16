from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import hello

app = FastAPI(
    title="FastAPI Boilerplate",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hello.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "FastAPI Boilerplate", "status": "ok", "docs": "/docs"}
