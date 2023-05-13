using Core.Entities.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Store.PostgreSQL.Configurations;

public class UserEntityConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");
        
        builder.HasKey(u => u.Id);

        builder.OwnsOne(u => u.Email)
            .Property(e => e.Address)
            .HasColumnName("Email")
            .HasConversion<EmailConverter>()
            .IsRequired();
        
        builder.OwnsOne(u => u.BirthDate)
            .Property(b => b.Date)
            .HasColumnName("BirthDate")
            .IsRequired();
        
        builder.OwnsOne(u => u.Password)
            .Property(p => p.HashedPassword)
            .HasColumnName("Password")
            .IsRequired();
    }
    
    private class EmailConverter : ValueConverter<Email, string>
    {
        public EmailConverter() 
            : base(
                email => email.Address,
                address => new Email(address))
        {
        }
    }
}