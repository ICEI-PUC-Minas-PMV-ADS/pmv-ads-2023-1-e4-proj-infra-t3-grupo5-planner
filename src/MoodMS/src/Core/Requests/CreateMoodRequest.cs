using System.Text.RegularExpressions;
using Core.Exceptions;

namespace Core.Requests;

public class CreateMoodRequest
{
    public CurrentMood CurrentMood { get; set; }
   
}