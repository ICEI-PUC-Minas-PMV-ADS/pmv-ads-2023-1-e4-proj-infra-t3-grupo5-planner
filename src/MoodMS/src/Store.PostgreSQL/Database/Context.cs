using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options) {}
    
    public DbSet<Mood> Moods { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Mood>()
            .HasKey(e => e.Id);
    }
}