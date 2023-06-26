using Core.Entities;
using Microsoft.EntityFrameworkCore;


namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options)
    {
    }

    public DbSet<Goal> Goals { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Goal>()
            .HasKey(e => e.Id);
    }

}

