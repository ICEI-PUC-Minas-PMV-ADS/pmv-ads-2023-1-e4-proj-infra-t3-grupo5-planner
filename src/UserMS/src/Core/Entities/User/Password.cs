using System.Text.RegularExpressions;
using Core.Exceptions;

namespace Core.Entities.User;

public record Password
{
    public string HashedPassword { get; private set; }
    
    private Password() {}
    
    public Password(string password)
    {
        if (password.Length < 8)
        {
            throw new WeakPasswordException("Sua senha deve ter mais de 8 caracteres.");
        }

        if (!Regex.IsMatch(password, @"(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#^&*!])"))
        {
            throw new WeakPasswordException(
                "Sua senha deve conter ao menos um caractere especial, letras maiúsculas, minúsculas e números.");
        }

        HashedPassword = password;
    }

}