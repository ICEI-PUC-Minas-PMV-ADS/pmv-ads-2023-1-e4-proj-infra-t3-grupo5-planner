using Core.Entities;
using Core.Entities.Interfaces;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Extensions;

namespace Store.PostgreSQL.Database
{
    public class Context : DbContext
    {
        public DbSet<Template> Templates { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Template>()
                .HasMany(t => t.Widgets) 
                .WithMany() 
                .UsingEntity(j => j.ToTable("TemplateWidgets"));
        }

    }
}
