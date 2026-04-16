package main

import (
	"github.com/joho/godotenv"
	"github.com/yourusername/go-cli/cmd"
)

func main() {
	godotenv.Load()
	cmd.Execute()
}
