using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Exceptions;
using Core.Requests;

namespace Core.Entities;

public class User : ITrackable
{
    public int Id { get; private set; }
    public string FirstName { get; private set;  }
    public string LastName { get; private set; }
    public string Email { get; private set; }
    public string Password { get; private set; }

    public DateOnly BirthDate { get; private set; }
    public bool IsPremium { get; private set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    
    // Tech debt: wee need an empty constructor for EF.
    private User() {}

    public User(CreateUserRequest request)
    {
        FirstName = request.FirstName;
        LastName = request.LastName;
        Email = request.Email;
        BirthDate = request.BirthDate;
        IsPremium = false;
        
        if (request.Password.Length < 8)
        {
            throw new WeakPasswordException("Sua senha deve ter mais de 8 caracteres.");
        }

        if (!Regex.IsMatch(request.Password, @"(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#^&*!])"))
        {
            throw new WeakPasswordException(
                "Sua senha deve conter ao menos um caractere especial, letras maiúsculas, minúsculas e números.");
        }

        Password = request.Password;
    }
}