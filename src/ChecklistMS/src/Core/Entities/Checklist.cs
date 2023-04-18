using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.Interfaces;
using Core.Requests;



namespace Core.Entities
{

    public class Checklist : ITrackable
{
    public int? Id { get; private set; }
    public string Title { get; private set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
     public DateTime DeletedOn { get; private set; }

        // Tech debt: wee need an empty constructor for EF.
        private Checklist() { }

    public Checklist(ChecklistRequest request)
    {
        Id = request.Id;
        Title = request.Title;
    }

}