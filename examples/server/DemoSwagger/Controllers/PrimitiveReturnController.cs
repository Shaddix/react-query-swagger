using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger;


[Route("primitive")]
[ApiController]
public class PrimitiveReturnController
{
    [HttpGet("String")]
    public string String() => "";
    [HttpGet("Number")]
    public int Number() => 2;
    [HttpGet("Bool")]
    public bool Boolean() => true;
    [HttpGet("DateOnly")]
    public DateOnly DateOnly() => System.DateOnly.MinValue;
    [HttpGet("DateTime")]
    public DateTime DateTime() => System.DateTime.UtcNow;
}