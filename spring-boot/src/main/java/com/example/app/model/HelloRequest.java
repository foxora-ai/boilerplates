package com.example.app.model;

import jakarta.validation.constraints.NotBlank;

public record HelloRequest(@NotBlank String name) {}
