using System.Text.RegularExpressions;
using Core.Exceptions;

namespace Core.Requests;

public class CreateUserRequest
{
    public string FirstName { get; set; }
    
    public string LastName { get; set; }
    
    public string Email { get; set; }

    public string Password { get; set; }

    public DateOnly BirthDate { get; set; }
}