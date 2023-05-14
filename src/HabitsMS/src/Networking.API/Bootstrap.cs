using Microsoft.AspNetCore.Mvc;
using Networking.API.Controllers;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Networking.API.Converters;

namespace Networking.API;

public class ApiBootstrap
{
    private WebApplicationBuilder _builder;

    public ApiBootstrap(string[] args, Action<IServiceCollection> options)
    {
        _builder = WebApplication.CreateBuilder(args);
        
        options.Invoke(_builder.Services);

        var adapterAssembly = typeof(HabitController).Assembly;

        _builder.Services.AddControllers()
            .PartManager.ApplicationParts.Add(new AssemblyPart(adapterAssembly));
        _builder.Services.AddEndpointsApiExplorer();
        _builder.Services.AddSwaggerGen();
        
        _builder.Services.Configure<JsonOptions>(options =>
        {
            options.JsonSerializerOptions.Converters.Add(new DateOnlyConverter());
        });
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