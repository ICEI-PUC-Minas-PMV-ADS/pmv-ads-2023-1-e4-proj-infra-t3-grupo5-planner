using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class TaskCheckbox : ITrackable
{
    public int? Id { get; private set; }
    public int IdChecklist{ get; private set; }
    public string Name { get; private set; }
    public bool IsCompleted { get; private set; }
    public DateTime CompletionDate { get; private set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    public DateTime? DeletedOn { get; private set; }

    public ICollection<Checklist> Checklist { get; set; } // relação de muitos para muitos

    // Tech debt: wee need an empty constructor for EF.
    private TaskCheckbox() {}

    public TaskCheckbox(TaskCheckboxRequest request)
    {
        Id = request.Id;
        IdChecklist = request.IdChecklist;
        Name = request.Name;
        IsCompleted = request.IsCompleted;
        CompletionDate = request.CompletionDate;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateTaskCheckbox(TaskCheckboxRequest request)
    {
        Name = request.Name;
        IsCompleted = request.IsCompleted;
        UpdatedOn = DateTime.UtcNow;
    }
}