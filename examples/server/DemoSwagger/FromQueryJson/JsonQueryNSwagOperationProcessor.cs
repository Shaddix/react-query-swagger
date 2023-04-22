using System.Net.Mime;
using System.Reflection;
using NJsonSchema;
using NSwag;
using NSwag.Generation.Processors;
using NSwag.Generation.Processors.Contexts;

namespace DemoSwagger.FromQueryJson;

/// <summary>
/// Taken from https://abdus.dev/posts/aspnetcore-model-binding-json-query-params/
/// </summary>
public class JsonQueryNSwagOperationProcessor:IOperationProcessor {
    
    public bool Process(OperationProcessorContext context)
    {
        foreach ((ParameterInfo parameterInfo, OpenApiParameter openApiParameter) in context.Parameters)
        {
            var fromJsonQueryAttribute = parameterInfo.CustomAttributes.FirstOrDefault(attribute => attribute.AttributeType == typeof(FromJsonQueryAttribute));
            if (fromJsonQueryAttribute == null) continue;
            var content = new Dictionary<string, OpenApiMediaType>()
            {
                [MediaTypeNames.Application.Json] = new OpenApiMediaType()
                {

                    Schema = openApiParameter.Schema,
                }
            };
            openApiParameter.ExtensionData.Add("content", content);
            // We need to add schema somewhere where it could be parsed by 
            // JsonSchemaReferenceUtilities.UpdateSchemaReferencePaths.
            openApiParameter.AdditionalItemsSchema = openApiParameter.Schema;
            openApiParameter.Schema = null;
        }
        return true;
    }
}