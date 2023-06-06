using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Store.PostgreSQL.Database;

var api = new ApiBootstrap(args, options =>
{
    options.AddSingleton<IDbContextFactory<Context>, ContextFactory>();
    options.AddScoped<Context>(sp =>
    {
        var contextFactory = sp.GetRequiredService<IDbContextFactory<Context>>();
        return contextFactory.CreateDbContext();
    });
    options.AddScoped<IChecklistStore, ChecklistRepository>();
    options.AddScoped<ITaskCheckboxStore, TaskCheckboxRepository>();
});

await api.RunAsync();