using DemoSwagger.FromQueryJson;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMvc();

builder.Services.AddOpenApiDocument(options => options.AddJsonQuerySupport());
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.UseOpenApi(); // serve OpenAPI/Swagger documents
app.UseSwaggerUi(); // serve Swagger UI

app.MapControllers();
app.Run();
