using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options) {}
    
    public DbSet<Notes> Notes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Notes>()
            .HasKey(e => e.Id);
    }
}