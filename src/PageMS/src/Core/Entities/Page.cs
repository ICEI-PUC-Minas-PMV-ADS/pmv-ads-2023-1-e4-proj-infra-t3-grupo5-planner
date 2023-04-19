using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class Page : ITrackable
{
    public int Id { get; private set; }
    public int UserId { get; private set; }
    public string Title { get; private set; }
    public string Body { get; private set; }
    public List<Widget> Widgets { get; private set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    public DateTime? DeletedOn { get; private set; }

    // Tech debt: wee need an empty constructor for EF.
    private Page() {}

    public Page(CreatePageRequest request)
    {
        UserId = request.UserId;
        Title = request.Title;
        Body = request.Body;
        Widgets = request.Widgets;
    }
}
