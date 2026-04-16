from flask import Blueprint, request, jsonify

hello_bp = Blueprint("hello", __name__)

@hello_bp.get("/hello")
def get_hello():
    return jsonify({"message": "Hello from Flask!"})

@hello_bp.post("/hello")
def post_hello():
    data = request.get_json()
    name = data.get("name", "World") if data else "World"
    return jsonify({"message": f"Hello, {name}!"})
