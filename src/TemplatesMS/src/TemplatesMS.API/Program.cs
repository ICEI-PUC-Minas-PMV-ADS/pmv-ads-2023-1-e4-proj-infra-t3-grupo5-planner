using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Store.PostgreSQL.Database;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=templatesms;Password=planner;Host=templatesmspgsql;Port=5432;Database=templatesms;Pooling=true;"));
    options.AddScoped<ITemplateStore, TemplateRepository>();
});

await api.RunAsync();
