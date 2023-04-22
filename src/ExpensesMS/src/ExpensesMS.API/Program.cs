using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Store.PostgreSQL.Database;
using Microsoft.EntityFrameworkCore;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=expensesms;Password=planner;Host=expensesmspgsql;Port=5432;Database=expensesms;Pooling=true;"));
    options.AddScoped<IExpensesStore, ExpensesRepository>();
});

await api.RunAsync();

