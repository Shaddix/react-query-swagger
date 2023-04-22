using Microsoft.AspNetCore.Mvc;

namespace DemoSwagger.FromQueryJson;
public class FromJsonQueryAttribute : ModelBinderAttribute
{
    public FromJsonQueryAttribute()
    {
        BinderType = typeof(JsonQueryBinder);
    }
}