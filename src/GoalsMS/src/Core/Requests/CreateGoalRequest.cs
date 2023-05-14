using System.Text.RegularExpressions;

namespace Core.Requests;

public class CreateGoalRequest
{
    public int UserId  { get; set; }
    
    public string Icon { get; set; }
    
    public string Title { get; set; }
    
    public int Target { get; set; }

    public int Progress { get; set; }
}