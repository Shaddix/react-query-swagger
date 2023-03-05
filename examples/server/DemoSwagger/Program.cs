var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMvc();

builder.Services.AddOpenApiDocument();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.UseOpenApi(); // serve OpenAPI/Swagger documents
app.UseSwaggerUi3(); // serve Swagger UI

app.Run();