from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def hello(request):
    return Response({"message": "Hello from Django!"})

@api_view(["POST"])
def hello_name(request):
    name = request.data.get("name", "World")
    return Response({"message": f"Hello, {name}!"})
