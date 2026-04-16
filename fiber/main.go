package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
	"github.com/yourusername/fiber-boilerplate/internal/handlers"
)

func main() {
	godotenv.Load()

	app := fiber.New(fiber.Config{
		AppName: "Fiber Boilerplate v0.1.0",
	})

	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New())

	app.Get("/", handlers.Health)
	app.Get("/api/hello", handlers.GetHello)
	app.Post("/api/hello", handlers.PostHello)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	log.Printf("Server running on http://localhost:%s", port)
	log.Fatal(app.Listen(":" + port))
}
