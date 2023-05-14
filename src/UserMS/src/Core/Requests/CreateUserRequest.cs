using System.ComponentModel.DataAnnotations;

namespace Core.Requests;

public class CreateUserRequest
{
    public string FirstName { get; set; }
    
    public string LastName { get; set; }
    
    public string Email { get; set; }

    public string Password { get; set; }

    public string BirthDate { get; set; }
}