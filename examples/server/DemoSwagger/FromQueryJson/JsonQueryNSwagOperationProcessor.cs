using System.Net.Mime;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.ModelBinding.Metadata;
using NJsonSchema;
using NSwag;
using NSwag.Generation.AspNetCore;
using NSwag.Generation.Processors;
using NSwag.Generation.Processors.Contexts;

namespace DemoSwagger.FromQueryJson;

/// <summary>
/// Taken from https://abdus.dev/posts/aspnetcore-model-binding-json-query-params/
/// </summary>
public class JsonQueryNSwagOperationProcessor : IOperationProcessor
{
    public bool Process(OperationProcessorContext context)
    {
        if (context is AspNetCoreOperationProcessorContext aspNetOperationContext)
        {
            var parameterDescriptions = aspNetOperationContext.ApiDescription.ParameterDescriptions;
            var parameters = aspNetOperationContext.OperationDescription.Operation.Parameters;
            for (int i = 0; i < parameterDescriptions.Count; i++)
            {
                var parameterDescription = parameterDescriptions[i];
                if (parameterDescription.ModelMetadata is DefaultModelMetadata defaultModelMetadata)
                {
                    if (
                        defaultModelMetadata.Attributes.Attributes.Any(attribute =>
                            attribute.GetType() == typeof(FromJsonQueryAttribute)
                        )
                    )
                    {
                        var openApiParameter = parameters[i];
                        var content = new Dictionary<string, OpenApiMediaType>()
                        {
                            [MediaTypeNames.Application.Json] = new OpenApiMediaType()
                            {
                                Schema = openApiParameter.Schema,
                            }
                        };
                        openApiParameter.ExtensionData ??= new Dictionary<string, object>();
                        openApiParameter.ExtensionData.Add("content", content);
                        // We need to add schema somewhere where it could be parsed by
                        // JsonSchemaReferenceUtilities.UpdateSchemaReferencePaths.
                        openApiParameter.AdditionalItemsSchema = openApiParameter.Schema;
                        openApiParameter.Schema = null;
                    }
                }
            }
        }

        return true;
    }
}
