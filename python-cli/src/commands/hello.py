import typer
from rich.console import Console
from rich.table import Table

hello_app = typer.Typer(help="Hello commands")
console = Console()

@hello_app.command()
def greet(
    name: str = typer.Argument("World", help="Name to greet"),
    count: int = typer.Option(1, "--count", "-c", help="Number of times to greet"),
    uppercase: bool = typer.Option(False, "--upper", "-u", help="Uppercase output"),
):
    """Greet someone."""
    for _ in range(count):
        msg = f"Hello, {name}!" if not uppercase else f"HELLO, {name.upper()}!"
        console.print(f"[bold cyan]{msg}[/bold cyan]")

@hello_app.command()
def list_greetings():
    """Show example greetings in a table."""
    table = Table(title="Example Greetings")
    table.add_column("Language", style="cyan")
    table.add_column("Greeting", style="green")
    table.add_row("English", "Hello!")
    table.add_row("Hindi", "Namaste!")
    table.add_row("Spanish", "Hola!")
    table.add_row("French", "Bonjour!")
    console.print(table)
