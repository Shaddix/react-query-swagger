using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger;

[Route("dictionary-array")]
[ApiController]
public class DictionaryArrayReturnController
{
    [HttpGet("String")]
    public Dictionary<string, string[]> String() => null!;
    [HttpGet("Number")]
    public Dictionary<string, int[]> Number() => null!;
    [HttpGet("Bool")]
    public Dictionary<string, bool[]> Boolean() => null!;
    [HttpGet("DateOnly")]
    public Dictionary<string, DateOnly[]> DateOnly() => null!;
    [HttpGet("DateTime")]
    public Dictionary<string, DateTime[]> DateTime() => null!;
    [HttpGet("Dummy")]
    public Dictionary<string, DummyDto[]> DummyDto() => null!;
}