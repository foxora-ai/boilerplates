use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct HelloResponse {
    pub message: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HelloRequest {
    pub name: String,
}
