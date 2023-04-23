using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options) {}
    
    public DbSet<Expenses> Expensess { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Expenses>()
            .HasKey(e => e.Id);
    }
}