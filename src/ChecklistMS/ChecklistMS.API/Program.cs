using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=checklistms;Password=planner;Host=localhost;Port=5402;Database=checklistms;Pooling=true;"));
    options.AddScoped<IChecklistStore, ChecklistRepository>();
    options.AddScoped<ITaskCheckboxStore, TaskCheckboxRepository>();
});

await api.RunAsync();