using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;

var api = new ApiBootstrap(args, options =>
{
    options.AddScoped<IChecklistStore, WidgetCheckboxRepository>();
});

await api.RunAsync();