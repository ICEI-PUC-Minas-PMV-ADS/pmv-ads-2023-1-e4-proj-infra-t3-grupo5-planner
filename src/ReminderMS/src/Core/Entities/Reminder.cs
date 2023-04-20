using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Exceptions;
using Core.Requests;

namespace Core.Entities;

public class Reminder //: ITrackable
{
    public int Id { get; private set; }
    public int UserId { get; private set;  }
    public string Title { get; private set; }
    public DateTime RemindsAt { get; private set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime? CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? UpdatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? DeletedAt { get; private set; }
    
    // Tech debt: wee need an empty constructor for EF.
    private Reminder() {}

    public Reminder(CreateReminderRequest request)
    { 
        UserId = request.UserId;
        Title = request.Title;
        RemindsAt = request.RemindsAt;
        this.CreatedOn = new DateTime();
        this.UpdatedOn = new DateTime();
    }
}