namespace Core.Requests;

public class CreateReminderRequest
{
    public int UserId { get; set; }
    
    public string Title { get; set; }
    
    public DateTime RemindsAt { get; set; }

}