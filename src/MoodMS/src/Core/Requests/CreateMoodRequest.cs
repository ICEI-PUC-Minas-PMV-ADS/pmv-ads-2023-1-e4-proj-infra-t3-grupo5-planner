using System.Text.RegularExpressions;

namespace Core.Requests;

public class CreateMoodRequest
{
    public CurrentMood CurrentMood { get; set; }
   
}