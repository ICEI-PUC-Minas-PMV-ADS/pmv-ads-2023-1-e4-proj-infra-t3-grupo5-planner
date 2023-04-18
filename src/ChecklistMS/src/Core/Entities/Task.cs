using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class Task : ITrackable
{
    public int? Id { get; private set; }
    public int ChecklistId { get; private set; }
    public string Name { get; private set; }
    public int IsCompleted { get; private set; }
    public DateTime CompletionDate { get; private set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    public DateTime DeletedOn { get; private set; }
    // Tech debt: wee need an empty constructor for EF.
    private Task() {}

    public Task(TaskRequest request)
    {
        Id = request.Id;
        ChecklistId = request.ChecklistId;
        Name = request.Name;
        IsCompleted = request.IsCompleted;
        CompletionDate = request.CompletionDate;
    }

}