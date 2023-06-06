using Core.Entities.User;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Store.PostgreSQL.Conversions;

public class BirthDateConverter : ValueConverter<BirthDate, string>
{
    public BirthDateConverter() 
        : base(
            birthdate => birthdate.Date.ToString("yyyy-MM-dd"),
            birthdate => new BirthDate(birthdate))
    {
    }
}