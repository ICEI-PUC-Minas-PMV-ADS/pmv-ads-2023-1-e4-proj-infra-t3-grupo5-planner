using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions options) : base(options) {}
    
    public DbSet<Checklist> Checklist { get; set; }

    public DbSet<TaskCheckbox> TaskCheckbox { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Checklist>()
           .HasKey(e => e.Id);

        modelBuilder.Entity<TaskCheckbox>()
          .HasKey(e => e.Id);
    }
}
