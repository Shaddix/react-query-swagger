using System.Text.Json;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace DemoSwagger.FromQueryJson;

public class JsonQueryBinder : IModelBinder
{
    private readonly ILogger<JsonQueryBinder> _logger;
    private readonly IObjectModelValidator _validator;

    public JsonQueryBinder(IObjectModelValidator validator, ILogger<JsonQueryBinder> logger)
    {
        _validator = validator;
        _logger = logger;
    }
    public Task BindModelAsync(ModelBindingContext bindingContext)
    {
        var value = bindingContext.ValueProvider.GetValue(bindingContext.FieldName).FirstValue;
        if (value == null)
        {
            return Task.CompletedTask;
        }

        try
        {
            var parsed = JsonSerializer.Deserialize(value, bindingContext.ModelType,
                new JsonSerializerOptions(JsonSerializerDefaults.Web));
            bindingContext.Result = ModelBindingResult.Success(parsed);

            if (parsed != null)
            {
                _validator.Validate(
                    bindingContext.ActionContext,
                    validationState: bindingContext.ValidationState,
                    prefix: string.Empty,
                    model: parsed
                );
            }
        }
        catch (JsonException e)
        {
            _logger.LogError(e, "Failed to bind parameter '{FieldName}'", bindingContext.FieldName);
            bindingContext.ActionContext.ModelState.TryAddModelError(key: e.Path, exception: e,
                bindingContext.ModelMetadata);
        }
        catch (Exception e) when (e is FormatException || e is OverflowException)
        {
            _logger.LogError(e, "Failed to bind parameter '{FieldName}'", bindingContext.FieldName);
            bindingContext.ActionContext.ModelState.TryAddModelError(string.Empty, e, bindingContext.ModelMetadata);
        }

        return Task.CompletedTask;
    }
}