using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class Habit //: ITrackable
{
    public int Id { get; private set; }
    public int UserId { get; private set; }
    public string Icon { get; private set; }
    public string Title { get; private set; }

    
    public DateTime? CreatedOn { get; private set; }
    
    public DateTime? UpdatedOn { get; private set; }


    // Tech debt: wee need an empty constructor for EF.
    private Habit() { }

    public Habit(CreateHabitRequest request)
    {
        UserId = request.UserId;
        Icon = request.Icon;
        Title = request.Title;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void Update(UpdateHabitRequest request)
    {
        if (request.Icon != null)
        {
            Icon = request.Icon;
        }

        if (request.Title != null)
        {
            Title = request.Title;
        }

        UpdatedOn = DateTime.UtcNow;
    }


    public void UpdateHabit(DateTime? updatedOn)
    {
        UpdatedOn = updatedOn;
    }
}