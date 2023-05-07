using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options) {}
    
    public DbSet<Expenses> Expenses { get; set; }
    public DbSet<Tags> Tags {get; set;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Expenses>()
            .HasKey(e => e.Id);
            
        modelBuilder.Entity<Tags>()
            .HasKey(t => t.TagId);

        modelBuilder.Entity<Tags>()
            .HasOne(t => t.Expenses)
            .WithMany(e => e.TagsOnExpense)
            .HasForeignKey(t => t.ExpensesId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}