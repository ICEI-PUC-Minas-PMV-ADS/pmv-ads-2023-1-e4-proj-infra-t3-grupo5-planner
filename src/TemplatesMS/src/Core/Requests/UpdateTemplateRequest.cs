using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Core.Requests
{
    public class UpdateTemplateRequest
    {
        public string Title { get; set; }

        public string Body { get; set; }

        public List<Widget> Widgets { get; set; }
    }
}