using DemoSwagger.FromQueryJson;
using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger;

[Route("query")]
[ApiController]
public class QueryController
{
    [HttpGet("JsonInQuery")]
    public string JsonInQuery([FromJsonQuery] DummyDto? dto) => "";

    [HttpGet("JsonInNested")]
    public string JsonInNestedQuery(JsonInNestedDto? dto) => "";

    [HttpGet("DateOnlyInQuery")]
    public string DateOnlyInQuery(DateOnly date) => "";

    [HttpGet("DateTimeInQuery")]
    public string DateTimeInQuery(DateTime date) => "";

    [HttpGet("ArrayInQuery")]
    public string[] ArrayInQuery([FromQuery] string[]? data) => data ?? [];

    [HttpGet("DictionaryInQuery")]
    public Dictionary<string, string> DictionaryInQuery(
        [FromQuery] Dictionary<string, string>? data
    ) => data ?? new Dictionary<string, string>();

    [HttpGet("DictionaryInJsonQuery")]
    public Dictionary<string, string> DictionaryInJsonQuery(
        [FromJsonQuery] Dictionary<string, string>? data
    ) => data ?? new Dictionary<string, string>();

    /// <summary>
    /// This will have the useQuery generated, since the name starts with Get
    /// </summary>
    [HttpPost("GetViaPost")]
    public DummyDto GetViaPost(DummyDto dto) => dto;

    /// <summary>
    /// However this will not (<see cref="GetViaPost"/>).
    /// </summary>
    [HttpPost("NonGetViaPost")]
    public DummyDto NonGetViaPost(DummyDto dto) => dto;

    /// <summary>
    /// Do not use in any other API methods except <see cref="GetWithBody"/>
    /// </summary>
    public class BodyDto
    {
        public string Tst { get; set; }
    }

    [HttpGet("WithBody")]
    public string WithBody(BodyDto dto) => "";

    /// <summary>
    /// Do not use in any other API methods except <see cref="GetWithClassInQuery"/>
    /// </summary>
    public class ClassInQueryDto
    {
        public string Tst { get; set; }
    }

    /// <summary>
    /// the name should NOT start with GET
    /// </summary>
    [HttpGet("ClassInQuery")]
    public string WithClassInQuery([FromQuery] ClassInQueryDto dto) => "";
}
