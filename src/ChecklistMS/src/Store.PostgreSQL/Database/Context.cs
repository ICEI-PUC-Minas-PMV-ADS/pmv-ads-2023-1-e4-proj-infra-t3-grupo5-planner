using Core.Entities;
using Core.Entities.Interfaces;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Extensions;

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
