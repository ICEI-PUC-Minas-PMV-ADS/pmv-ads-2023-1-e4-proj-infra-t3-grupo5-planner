using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Store.PostgreSQL.Database;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=habitsms;Password=planner;Host=habitsmspgsql;Port=5432;Database=habitsms;Pooling=true;"));
    options.AddScoped<IHabitStore, HabitRepository>();
});

await api.RunAsync();
