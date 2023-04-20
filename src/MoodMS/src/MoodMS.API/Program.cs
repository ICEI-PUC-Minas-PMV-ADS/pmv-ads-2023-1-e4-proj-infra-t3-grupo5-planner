using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Store.PostgreSQL.Database;
using Microsoft.EntityFrameworkCore;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=moodms;Password=planner;Host=moodmspgsql;Port=5432;Database=moodms;Pooling=true;"));
    options.AddScoped<IMoodStore, MoodRepository>();
});

await api.RunAsync();

