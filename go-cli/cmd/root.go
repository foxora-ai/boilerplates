package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:     "mycli",
	Version: "0.1.0",
	Short:   "mycli — a Go CLI tool built with Cobra",
	Long:    "A production-ready CLI boilerplate built with Cobra and color output.",
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
