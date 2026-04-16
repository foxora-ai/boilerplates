package cmd

import (
	"fmt"

	"github.com/fatih/color"
	"github.com/spf13/cobra"
)

var (
	greetCount     int
	greetUppercase bool
)

var helloCmd = &cobra.Command{
	Use:   "hello [name]",
	Short: "Greet someone",
	Args:  cobra.MaximumNArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		name := "World"
		if len(args) > 0 {
			name = args[0]
		}
		for i := 0; i < greetCount; i++ {
			msg := fmt.Sprintf("Hello, %s!", name)
			if greetUppercase {
				msg = fmt.Sprintf("HELLO, %s!", name)
			}
			color.Cyan(msg)
		}
	},
}

var listCmd = &cobra.Command{
	Use:   "list",
	Short: "List available greetings",
	Run: func(cmd *cobra.Command, args []string) {
		greetings := [][]string{
			{"English", "Hello!"},
			{"Hindi", "Namaste!"},
			{"Spanish", "Hola!"},
			{"French", "Bonjour!"},
			{"Japanese", "Konnichiwa!"},
		}
		color.Yellow("Available greetings:")
		for _, g := range greetings {
			fmt.Printf("  %s — %s\n", color.GreenString(g[0]), g[1])
		}
	},
}

func init() {
	helloCmd.Flags().IntVarP(&greetCount, "count", "c", 1, "Number of times to greet")
	helloCmd.Flags().BoolVarP(&greetUppercase, "upper", "u", false, "Print in uppercase")
	rootCmd.AddCommand(helloCmd)
	rootCmd.AddCommand(listCmd)
}
