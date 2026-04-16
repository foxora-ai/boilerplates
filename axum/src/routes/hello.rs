use axum::{extract::Json, http::StatusCode, response::IntoResponse};
use crate::models::{HelloRequest, HelloResponse};

pub async fn get_hello() -> impl IntoResponse {
    (
        StatusCode::OK,
        Json(HelloResponse {
            message: "Hello from Axum!".to_string(),
        }),
    )
}

pub async fn post_hello(Json(body): Json<HelloRequest>) -> impl IntoResponse {
    (
        StatusCode::OK,
        Json(HelloResponse {
            message: format!("Hello, {}!", body.name),
        }),
    )
}

pub async fn health() -> impl IntoResponse {
    (StatusCode::OK, Json(serde_json::json!({ "status": "ok" })))
}
