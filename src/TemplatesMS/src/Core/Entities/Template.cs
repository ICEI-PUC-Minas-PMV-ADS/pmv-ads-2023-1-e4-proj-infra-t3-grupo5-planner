using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities
{
    public class Template : ITrackable
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }

        public List<Widget> Widgets { get; set; }


        public DateTime? UpdatedOn { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime? CreatedOn { get; private set; }


        private Template() { }

        public Template(CreateTemplateRequest request)
        {
            UserId = request.UserId;
            Title = request.Title;
            Body = request.Body;
            CreatedOn = DateTime.UtcNow;
            UpdatedOn = DateTime.UtcNow;
            Widgets = new List<Widget>();
        }

        public void Update(UpdateTemplateRequest request)
        {
            if (request.Title != null)
            {
                Title = request.Title;
            }

            if (request.Body != null)
            {
                Body = request.Body;
            }

            if (request.Widgets != null)
            {
                Widgets = request.Widgets;
            }
            UpdatedOn = DateTime.UtcNow;

        }
        public void UpdateTemplate(DateTime? updatedOn)
        {
            UpdatedOn = updatedOn;
        }
    }
}