using Networking.API.Controllers;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Networking.API;

public class ApiBootstrap
{
    private WebApplicationBuilder _builder;

    public ApiBootstrap(string[] args, Action<IServiceCollection> options)
    {
        _builder = WebApplication.CreateBuilder(args);
        
        options.Invoke(_builder.Services);

        var adapterAssembly = typeof(ExpensesController).Assembly;

        _builder.Services.AddControllers()
            .PartManager.ApplicationParts.Add(new AssemblyPart(adapterAssembly));
        _builder.Services.AddEndpointsApiExplorer();
        _builder.Services.AddSwaggerGen();
        //_builder.Services.AddControllers().AddJsonOptions(options => {
        //    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
        //});
        _builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
    }

    public Task RunAsync()
    {
        var app = _builder.Build();

        app.UseSwagger();
        app.UseSwaggerUI();

        app.UseHttpsRedirection();

        app.UseAuthorization();
        
        app.MapControllers();
        return app.RunAsync();
    }
}