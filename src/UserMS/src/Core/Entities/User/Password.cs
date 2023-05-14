using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Core.Exceptions;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace Core.Entities.User;

public record Password
{
    public string Hash { get; private set; }
    
    public string Salt { get; private set; }
    
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

        Salt = Convert.ToBase64String(RandomNumberGenerator.GetBytes(128 / 8));

        Hash = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: password,
            salt: Convert.FromBase64String(Salt),
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));
    }

}