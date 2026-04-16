import typer
from rich.console import Console
from src.commands.hello import hello_app

app = typer.Typer(
    name="mycli",
    help="My CLI tool — built with Typer + Rich",
    add_completion=False,
)

console = Console()

app.add_typer(hello_app, name="hello")

@app.command()
def version():
    """Show the current version."""
    console.print("[bold green]mycli[/bold green] v0.1.0")

if __name__ == "__main__":
    app()
