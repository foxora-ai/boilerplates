package com.example.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable

@Serializable data class HelloResponse(val message: String)
@Serializable data class HelloRequest(val name: String)

fun Route.helloRoutes() {
    route("/api/hello") {
        get {
            call.respond(HelloResponse("Hello from Ktor!"))
        }
        post {
            val req = call.receive<HelloRequest>()
            call.respond(HelloResponse("Hello, ${req.name}!"))
        }
    }
}
