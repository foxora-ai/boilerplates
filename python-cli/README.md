# Python CLI Boilerplate

Production-ready CLI tool built with Typer and Rich.

## Stack

- **Typer** — CLI framework built on Click
- **Rich** — beautiful terminal output, tables, progress bars
- **Python 3.12+**

## Getting Started

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m src.main --help
```

## Usage

```bash
# Greet someone
python -m src.main hello greet Tom
python -m src.main hello greet Tom --count 3 --upper

# List greetings table
python -m src.main hello list-greetings

# Show version
python -m src.main version
```

## Install as a package

```bash
pip install -e .
mycli --help
```

## Project Structure

```
src/
  main.py              # Root Typer app
  commands/
    hello.py           # hello sub-commands
  utils/
    output.py          # success/error/info helpers
pyproject.toml         # Package config + entry point
requirements.txt
```
