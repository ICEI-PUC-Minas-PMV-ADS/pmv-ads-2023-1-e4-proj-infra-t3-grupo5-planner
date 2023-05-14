namespace Core.Exceptions;

public class BadEmailException : Exception
{
    public BadEmailException()
    {
    }

    public BadEmailException(string message)
        : base(message)
    {
    }

    public BadEmailException(string message, Exception inner)
        : base(message, inner)
    {
    }
}