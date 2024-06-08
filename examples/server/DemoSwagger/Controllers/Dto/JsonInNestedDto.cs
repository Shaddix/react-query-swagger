using DemoSwagger.FromQueryJson;

namespace DemoSwagger;

public class JsonInNestedDto
{
    public string Test { get; set; }

    [FromJsonQuery]
    public DummyDto Dummy { get; set; }
}
