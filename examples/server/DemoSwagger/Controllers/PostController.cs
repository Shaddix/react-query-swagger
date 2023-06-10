using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger;

[Route("post")]
[ApiController]
public class PostController
{
    [HttpPost("user/{id}")]
    public string IdInUrl(int id, DummyDto dto) => "";

    [HttpPost("no-parameter/no-body")]
    public string NoParameterNoBody() => "";

    [HttpPost("no-parameter/simple-body")]
    public string SimpleBody([FromBody] string body) => "";

    [HttpPost("with-parameter/{id}/no-body")]
    public string ParameterInUrlNoBody(string id) => "";

    [HttpPost("with-parameter/{id}/simple-body")]
    public string SimpleBodyWithParameter(int id, [FromBody] string body) => "";

    [HttpPost("with-parameter/{id}/simple-array-body")]
    public string SimpleArrayBodyWithParameter(int id, [FromBody] string[] body) => "";
}
