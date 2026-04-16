from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret")
    CORS(app)

    from app.routes.hello import hello_bp
    app.register_blueprint(hello_bp, url_prefix="/api")

    @app.get("/")
    def index():
        return {"message": "Flask Boilerplate", "status": "ok"}

    @app.errorhandler(404)
    def not_found(e):
        return {"error": "Not found"}, 404

    @app.errorhandler(500)
    def server_error(e):
        return {"error": "Internal server error"}, 500

    return app
