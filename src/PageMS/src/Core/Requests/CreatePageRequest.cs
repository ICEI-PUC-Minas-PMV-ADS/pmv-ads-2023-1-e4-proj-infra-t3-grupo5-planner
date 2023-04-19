using Core.Entities;

namespace Core.Requests;

public class CreatePageRequest
{
    public int UserId { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public List<Widget> Widgets { get; set; }

}

