using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.DTO;
using Core.Entities.Interfaces;
using Core.Exceptions;
using Core.Requests;

namespace Core.Entities;

public class Reminder : ITrackable
{
    public int Id { get; private set; }
    public int UserId { get; private set;  }
    public string Title { get; private set; }
    public DateTime RemindsAt { get; private set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime? CreatedAt { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? UpdatedAt { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? DeletedAt { get; private set; }
    
    // Tech debt: wee need an empty constructor for EF.
    private Reminder() {}

    public Reminder(CreateReminderRequest request)
    { 
        UserId = request.UserId;
        Title = request.Title;
        CreatedAt = DateTime.UtcNow;
        UpdatedAt = DateTime.UtcNow;
        if(request.RemindsAt < DateTime.Now){
            throw new ReminderDateException("A data do lembrete não pode ser para antes da data atual");
        }else{
            RemindsAt = request.RemindsAt;
        }
    }

    public void UpdateReminder(ReminderDTO reminderDTO)
    {
        Title = reminderDTO.Title;
        RemindsAt = reminderDTO.RemindsAt;
        if(reminderDTO.RemindsAt < DateTime.Now){
            throw new ReminderDateException("A data do lembrete não pode ser para antes da data atual");
        }else{
            RemindsAt = reminderDTO.RemindsAt;
        }
        UpdatedAt = DateTime.UtcNow;
    }

}