using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations;

namespace Core.Requests
{
    public class UpdateGoalRequest
    {
        public string Icon { get; set; }

        public string Title { get; set; }

        public int Target { get; set; }

        public int Progress { get; set; }
    }
}