using Networking.API;
using Store.PostgreSQL.Repositories;
using Core.Stores;
using Microsoft.Extensions.DependencyInjection;
using Store.PostgreSQL.Database;
using Microsoft.EntityFrameworkCore;

var api = new ApiBootstrap(args, options =>
{
    options.AddDbContext<Context>(options => options.UseNpgsql("User ID=notesms;Password=planner;Host=notesmspgsql;Port=5432;Database=notesms;Pooling=true;"));
    options.AddScoped<INotesStore, NotesRepository>();
});

await api.RunAsync();

