using Core.Entities;
using Core.Entities.Interfaces;
using Core.Entities.User;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Configurations;
using Store.PostgreSQL.Extensions;

namespace Store.PostgreSQL.Database;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options)
    {
    }

    public DbSet<Goal> Goals { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserEntityConfiguration());
        modelBuilder.ApplyGlobalFilters<ISoftDeletable>(p => p.DeletedOn == null);
        base.OnModelCreating(modelBuilder);
    }
<<<<<<< HEAD:src/GoalsMS/src/Store.PostgreSQL/Database/Context.cs
}
=======
    
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
>>>>>>> 8fc218c966aa13788ef039b30dea53fe3f62a478:src/UserMS/src/Store.PostgreSQL/Database/Context.cs
