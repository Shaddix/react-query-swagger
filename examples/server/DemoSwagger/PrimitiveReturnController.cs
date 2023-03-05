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

[Route("dictionary")]
[ApiController]
public class DictionaryReturnController
{
    [HttpGet("String")]
    public Dictionary<string, string> String() => null!;
    [HttpGet("Number")]
    public Dictionary<string, int> Number() => null!;
    [HttpGet("Bool")]
    public Dictionary<string, bool> Boolean() => null!;
    [HttpGet("DateOnly")]
    public Dictionary<string, DateOnly> DateOnly() => null!;
    [HttpGet("DateTime")]
    public Dictionary<string, DateTime> DateTime() => null!;
    [HttpGet("Dummy")]
    public Dictionary<string, DummyDto> DummyDto() => null!;
}


public class DummyDto
{
    public string Test { get; set; }
    public DateOnly DateOnly { get; set; }
    public DateTime DateTime { get; set; }
}