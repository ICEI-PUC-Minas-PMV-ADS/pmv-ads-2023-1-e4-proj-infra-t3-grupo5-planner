namespace Core.Exceptions;

public class BadBirthDateException : Exception
{
    public BadBirthDateException()
    {
    }

    public BadBirthDateException(string message)
        : base(message)
    {
    }

    public BadBirthDateException(string message, Exception inner)
        : base(message, inner)
    {
    }
}