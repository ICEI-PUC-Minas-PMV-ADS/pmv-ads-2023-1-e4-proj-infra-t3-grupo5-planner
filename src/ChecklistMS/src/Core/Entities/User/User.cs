using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities.User;

public class User : ITrackable
{
    public int Id { get; private set; }
    public string FirstName { get; private set;  }
    public string LastName { get; private set; }
    public Email Email { get; private set; }
    public Password Password { get; private set; }

    public BirthDate BirthDate { get; private set; }
    public bool IsPremium { get; private set; }
    
    public DateTime CreatedOn { get; private set; }
    
    public DateTime UpdatedOn { get; private set; }
    
    // Tech debt: wee need an empty constructor for EF.
    private User() {}

    public static User FromRequest(CreateUserRequest request)
    {
        return new User
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = new Email(request.Email),
            BirthDate = new BirthDate(request.BirthDate),
            IsPremium = false,
            Password = new Password(request.Password)
        };
    }
}