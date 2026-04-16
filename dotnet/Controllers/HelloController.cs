using Microsoft.AspNetCore.Mvc;
using App.Models;

namespace App.Controllers;

[ApiController]
[Route("api/hello")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
        => Ok(new HelloResponse("Hello from ASP.NET Core!"));

    [HttpPost]
    public IActionResult Post([FromBody] HelloRequest req)
        => Ok(new HelloResponse($"Hello, {req.Name}!"));
}
