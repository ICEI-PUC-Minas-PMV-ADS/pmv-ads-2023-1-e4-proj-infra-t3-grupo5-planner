using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class Habit : ITrackable
{
    public int Id { get; private set; }
    public int UserId { get; private set;  }
    public string Icon { get; private set; }
    public string Title { get; private set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime DeletedAt { get; private set; }

    // Tech debt: wee need an empty constructor for EF.
    private Habit() { }

    public Habit(CreateHabitRequest request)
    {
        UserId = request.UserId;
        Icon = request.Icon;
        Title = request.Title;      
      
    }
}