using Networking.API;
using Store.PostgreSQL.Repositories;
using Store.PostgreSQL.Database;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=reminderms;Password=planner;Host=remindermspgsql;Port=5432;Database=reminderms;Pooling=true;"));
    options.AddScoped<IReminderStore, ReminderRepository>();
});

await api.RunAsync();