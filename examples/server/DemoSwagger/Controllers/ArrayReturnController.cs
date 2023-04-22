using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger;

[Route("array")]
[ApiController]
public class ArrayReturnController
{
    [HttpGet("String")]
    public string[] String() => new [] {""};
    [HttpGet("Number")]
    public int[] Number() => new [] {2};
    [HttpGet("Bool")]
    public bool[] Boolean() => new [] {true};
    [HttpGet("DateOnly")]
    public DateOnly[] DateOnly() => new [] {System.DateOnly.MaxValue, };
    [HttpGet("DateTime")]
    public DateTime[] DateTime() => new [] {System.DateTime.UtcNow, };
    [HttpGet("Dummy")]
    public DummyDto[] DummyDto() => new [] {new DummyDto()};
}