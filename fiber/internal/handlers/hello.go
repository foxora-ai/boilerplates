package handlers

import "github.com/gofiber/fiber/v2"

type HelloRequest struct {
	Name string `json:"name"`
}

func Health(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"status": "ok"})
}

func GetHello(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "Hello from Fiber!"})
}

func PostHello(c *fiber.Ctx) error {
	var req HelloRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}
	if req.Name == "" {
		req.Name = "World"
	}
	return c.JSON(fiber.Map{"message": "Hello, " + req.Name + "!"})
}
