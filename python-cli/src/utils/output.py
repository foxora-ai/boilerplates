from rich.console import Console

console = Console()

def success(msg: str) -> None:
    console.print(f"[bold green]✓[/bold green] {msg}")

def error(msg: str) -> None:
    console.print(f"[bold red]✗[/bold red] {msg}")

def info(msg: str) -> None:
    console.print(f"[bold blue]ℹ[/bold blue] {msg}")
