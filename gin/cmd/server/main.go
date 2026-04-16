package main

import (
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/yourusername/gin-boilerplate/internal/handlers"
	"github.com/yourusername/gin-boilerplate/internal/middleware"
)

func main() {
	godotenv.Load()

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	if os.Getenv("GIN_MODE") == "release" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.New()
	r.Use(cors.Default())
	r.Use(middleware.Logger())
	r.Use(gin.Recovery())

	r.GET("/", handlers.Health)
	r.GET("/api/hello", handlers.GetHello)
	r.POST("/api/hello", handlers.PostHello)

	log.Printf("Server running on http://localhost:%s", port)
	r.Run(":" + port)
}
