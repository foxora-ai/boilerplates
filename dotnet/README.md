# .NET / ASP.NET Core Boilerplate

REST API with ASP.NET Core 9, controllers, Swagger, and CORS.

## Stack

- **ASP.NET Core 9** — web framework
- **C# 13** — language
- **Swagger/OpenAPI** — auto docs
- **.NET 9**

## Getting Started

```bash
dotnet restore
dotnet run
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/api/hello` | Hello message |
| POST | `/api/hello` | Hello with name (`{ "name": "..." }`) |
| GET | `/swagger` | Swagger UI |

## Project Structure

```
Controllers/
  HelloController.cs    # API controller
Models/
  Hello.cs              # Request/response records
Program.cs              # App entry + service config
App.csproj              # Project file
appsettings.json        # Configuration
```
