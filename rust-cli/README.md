# Rust CLI Boilerplate

Fast, compiled CLI tool built with Clap v4 and colored terminal output.

## Stack

- **Clap v4** — argument parsing with derive macros
- **colored** — terminal colors
- **anyhow** — ergonomic error handling
- **Rust 2021 edition**

## Getting Started

```bash
cargo build --release
./target/release/mycli --help
```

## Usage

```bash
# Greet someone
cargo run -- greet Tom
cargo run -- greet Tom --count 3 --uppercase

# List greetings
cargo run -- list
```

## Project Structure

```
src/
  main.rs            # CLI entry point + Clap definitions
  commands/
    mod.rs
    hello.rs         # Hello command logic
Cargo.toml
```
