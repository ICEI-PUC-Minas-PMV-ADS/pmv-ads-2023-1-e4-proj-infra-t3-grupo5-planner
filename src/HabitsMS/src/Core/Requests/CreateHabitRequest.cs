using System.Text.RegularExpressions;

namespace Core.Requests;

public class CreateHabitRequest
{
    public int UserId  { get; set; }
    
    public string Icon { get; set; }
    
    public string Title { get; set; }  
}