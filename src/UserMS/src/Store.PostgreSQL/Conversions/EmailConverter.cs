using Core.Entities.User;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Store.PostgreSQL.Conversions;

public class EmailConverter : ValueConverter<Email, string>
{
    public EmailConverter() 
        : base(
            email => email.Address,
            address => new Email(address))
    {
    }
}