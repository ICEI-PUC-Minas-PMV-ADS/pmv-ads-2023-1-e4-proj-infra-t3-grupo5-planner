namespace Core.Entities;

public class PasswordReset
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Token { get; set; }
    public DateTime ExpiresAt { get; private set; }

    public bool IsValid()
    {
        return ExpiresAt.CompareTo(DateTime.Now) > 0;
    }
}