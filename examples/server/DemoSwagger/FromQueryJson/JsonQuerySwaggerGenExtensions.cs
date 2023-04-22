using NJsonSchema.Generation;
using NSwag.Generation.AspNetCore;

namespace DemoSwagger.FromQueryJson;



public static class JsonQuerySwaggerGenExtensions 
{
    public static AspNetCoreOpenApiDocumentGeneratorSettings AddJsonQuerySupport(
        this AspNetCoreOpenApiDocumentGeneratorSettings options)
    {
        options.OperationProcessors.Add(new JsonQueryNSwagOperationProcessor());
        return options;
    }
}