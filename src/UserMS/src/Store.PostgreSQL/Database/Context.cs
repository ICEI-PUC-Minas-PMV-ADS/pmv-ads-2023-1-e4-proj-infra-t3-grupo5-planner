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
    
    public DbSet<User> Users { get; set; }

    public DbSet<PasswordReset> PasswordResets { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
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