package com.example.app.controller;

import com.example.app.model.HelloRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/hello")
@CrossOrigin(origins = "*")
public class HelloController {

    @GetMapping
    public ResponseEntity<Map<String, String>> getHello() {
        return ResponseEntity.ok(Map.of("message", "Hello from Spring Boot!"));
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> postHello(@Valid @RequestBody HelloRequest req) {
        return ResponseEntity.ok(Map.of("message", "Hello, " + req.name() + "!"));
    }
}
