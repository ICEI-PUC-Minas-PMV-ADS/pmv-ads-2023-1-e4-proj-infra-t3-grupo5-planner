using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations;

namespace Core.Requests
{
    public class UpdateHabitRequest
    {
       public string Icon { get; set; }

       public string Title { get; set; }
    }
}