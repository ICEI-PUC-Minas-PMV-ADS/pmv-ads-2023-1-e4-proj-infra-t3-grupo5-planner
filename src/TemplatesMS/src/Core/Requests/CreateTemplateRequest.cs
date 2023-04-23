using System.Collections.Generic;
using Core.Entities;

    public class CreateTemplateRequest
    {
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public List<Widget> Widgets { get; set; }        
}

    





