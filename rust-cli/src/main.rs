mod commands;

use clap::{Parser, Subcommand};
use anyhow::Result;

#[derive(Parser)]
#[command(
    name = "mycli",
    version = "0.1.0",
    about = "A CLI tool built with Clap",
    long_about = None,
)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Greet someone
    Greet {
        /// Name to greet
        #[arg(default_value = "World")]
        name: String,

        /// Number of times to greet
        #[arg(short, long, default_value_t = 1)]
        count: u32,

        /// Print in uppercase
        #[arg(short, long)]
        uppercase: bool,
    },
    /// List available greetings
    List,
}

fn main() -> Result<()> {
    dotenvy::dotenv().ok();
    let cli = Cli::parse();

    match cli.command {
        Commands::Greet { name, count, uppercase } => {
            commands::hello::greet(&name, count, uppercase);
        }
        Commands::List => {
            commands::hello::list_greetings();
        }
    }

    Ok(())
}
