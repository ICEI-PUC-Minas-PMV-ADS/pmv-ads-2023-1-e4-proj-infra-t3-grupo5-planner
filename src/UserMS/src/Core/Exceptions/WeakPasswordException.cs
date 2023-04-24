namespace Core.Exceptions;

public class WeakPasswordException : Exception
{
    public WeakPasswordException()
    {
    }

    public WeakPasswordException(string message)
        : base(message)
    {
    }

    public WeakPasswordException(string message, Exception inner)
        : base(message, inner)
    {
    }
}