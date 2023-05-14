using Core.Entities;
using Core.Entities.Interfaces;
using Core.Entities.User;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Configurations;
using Store.PostgreSQL.Extensions;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions options) : base(options) {}
    
    public DbSet<Checklist> Checklist { get; set; }

    public DbSet<TaskCheckbox> TaskCheckbox { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
<<<<<<< HEAD:src/ChecklistMS/src/Store.PostgreSQL/Database/Context.cs

        modelBuilder.Entity<Checklist>()
           .HasKey(e => e.Id);

        modelBuilder.Entity<TaskCheckbox>()
          .HasKey(e => e.Id);
    }
}
=======
        modelBuilder.ApplyConfiguration(new UserEntityConfiguration());
        modelBuilder.ApplyGlobalFilters<ISoftDeletable>(p => p.DeletedOn == null);
        base.OnModelCreating(modelBuilder);
    }
    
    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        HandleTimestamps();
        return await base.SaveChangesAsync(cancellationToken);
    }
    
    private void HandleTimestamps()
    {
        var trackableEntities = this.ChangeTracker.Entries().Where(e => e is {Entity: ITrackable, State: EntityState.Added or EntityState.Modified});
        foreach (var trackableEntity in trackableEntities)
        {
            trackableEntity.Property("UpdatedOn").CurrentValue = DateTime.UtcNow;

            if (trackableEntity.State == EntityState.Added)
            {
                trackableEntity.Property("CreatedOn").CurrentValue = DateTime.UtcNow;
            }
        }
    }
}
>>>>>>> fe76b3b05c9eee7f385bfdd55136067771180f3f:src/UserMS/src/Store.PostgreSQL/Database/Context.cs
