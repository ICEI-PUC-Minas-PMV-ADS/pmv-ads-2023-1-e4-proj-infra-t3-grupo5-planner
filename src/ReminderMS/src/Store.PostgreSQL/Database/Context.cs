using Core.Entities;
using Core.Entities.Interfaces;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Extensions;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions options) : base(options) {}
    
    public DbSet<Reminder> Reminder { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyGlobalFilters<ISoftDeletable>(p => p.DeletedOn == null);
        base.OnModelCreating(modelBuilder);
    }
}