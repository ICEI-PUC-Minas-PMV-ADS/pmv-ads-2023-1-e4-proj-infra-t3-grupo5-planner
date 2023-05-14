using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Store.PostgreSQL.Database;
using Microsoft.EntityFrameworkCore;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=pagems;Password=planner;Host=pagemspgsql;Port=5432;Database=pagems;Pooling=true;"));
    options.AddScoped<IPageStore, PageRepository>();
});

await api.RunAsync();