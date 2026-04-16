from fastapi import APIRouter
from app.models.hello import HelloRequest, HelloResponse

router = APIRouter(prefix="/hello", tags=["hello"])

@router.get("/", response_model=HelloResponse)
async def get_hello():
    return HelloResponse(message="Hello from FastAPI!")

@router.post("/", response_model=HelloResponse)
async def post_hello(body: HelloRequest):
    return HelloResponse(message=f"Hello, {body.name}!")
