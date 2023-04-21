namespace Core.Exceptions;

public class ReminderDateException : Exception
{
    public ReminderDateException()
    {
    }

    public ReminderDateException(string message)
        : base(message)
    {
    }

    public ReminderDateException(string message, Exception inner)
        : base(message, inner)
    {
    }
}