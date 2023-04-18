using Store.PostgreSQL.Interceptors;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Store.PostgreSQL.Database;

public class ContextFactory : IDesignTimeDbContextFactory<Context>
{
    public Context CreateDbContext(string[] args)
    {
        var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
        
        var configurationBuilder = new ConfigurationBuilder() 
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{environment}.json", optional: true)
            .AddEnvironmentVariables()
            .Build();
        var optionsBuilder = new DbContextOptionsBuilder<Context>(); 
        var connectionString = configurationBuilder.GetConnectionString("PageMSDatabase");
        optionsBuilder.UseNpgsql(connectionString);
        optionsBuilder.AddInterceptors(new SoftDeletableEntityInterceptor());

        return new Context(optionsBuilder.Options);
    }
}