using DemoSwagger.FromQueryJson;
using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger;

[Route("query")]
[ApiController]
public class QueryController
{
    [HttpGet("JsonInQuery")]
    public string JsonInQuery([FromJsonQuery] DummyDto dto) => "";

    [HttpGet("DateOnlyInQuery")]
    public string DateOnlyInQuery(DateOnly date) => "";

    [HttpGet("DateTimeInQuery")]
    public string DateTimeInQuery(DateTime date) => "";
}
