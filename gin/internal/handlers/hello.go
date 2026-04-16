package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type HelloRequest struct {
	Name string `json:"name" binding:"required"`
}

type HelloResponse struct {
	Message string `json:"message"`
}

func GetHello(c *gin.Context) {
	c.JSON(http.StatusOK, HelloResponse{Message: "Hello from Gin!"})
}

func PostHello(c *gin.Context) {
	var req HelloRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, HelloResponse{Message: "Hello, " + req.Name + "!"})
}

func Health(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "ok"})
}
