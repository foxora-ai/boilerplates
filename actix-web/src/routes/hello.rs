use actix_web::{web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};

#[derive(Serialize)]
pub struct HelloResponse {
    pub message: String,
}

#[derive(Deserialize)]
pub struct HelloRequest {
    pub name: String,
}

pub async fn get_hello() -> impl Responder {
    HttpResponse::Ok().json(HelloResponse {
        message: "Hello from Actix-Web!".to_string(),
    })
}

pub async fn post_hello(body: web::Json<HelloRequest>) -> impl Responder {
    HttpResponse::Ok().json(HelloResponse {
        message: format!("Hello, {}!", body.name),
    })
}

pub async fn health() -> impl Responder {
    HttpResponse::Ok().json(serde_json::json!({ "status": "ok" }))
}
