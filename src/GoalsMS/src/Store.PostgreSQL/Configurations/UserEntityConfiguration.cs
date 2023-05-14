using Core.Entities.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Store.PostgreSQL.Conversions;

namespace Store.PostgreSQL.Configurations;

public class UserEntityConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");
        
        builder.HasKey(u => u.Id);

        builder.Property(u => u.Email)
            .HasConversion<EmailConverter>()
            .HasColumnName("Email")
            .IsRequired();
        
        builder.Property(u => u.BirthDate)
            .HasConversion<BirthDateConverter>()
            .HasColumnName("BirthDate")
            .IsRequired();
        
        builder.OwnsOne(u => u.Password, up =>
        {
            up.Property(p => p.Hash).HasColumnName("PasswordHash").IsRequired();
            up.Property(p => p.Salt).HasColumnName("PasswordSalt").IsRequired();
        });
    }
}