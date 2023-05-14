using Core.Exceptions;

namespace Core.Entities.User;

public record BirthDate
{
    private const int MinimumAcceptedAge = 13;
    
    public DateOnly Date { get; set; }

    private BirthDate() {}

    public BirthDate(string birthDate)
    {
        DateOnly parsedBirthDate;
        
        try
        {
            parsedBirthDate = DateOnly.ParseExact(birthDate, "yyyy-MM-dd");
        }
        catch (FormatException)
        {
            throw new BadBirthDateException("Data de nascimento inválida.");
        }

        if (DateOnly.FromDateTime(DateTime.Now).Year - parsedBirthDate.Year < MinimumAcceptedAge)
        {
            throw new BadBirthDateException("Você deve ser maior de 13 anos para se inscrever na plataforma.");
        }

        Date = parsedBirthDate;
    }
}