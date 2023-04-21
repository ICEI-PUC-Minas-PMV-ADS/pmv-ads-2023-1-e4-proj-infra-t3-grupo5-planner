using Core.Entities;
using Core.Entities.DTO;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;
//ToDo: Consertar o controller e o repositório.
[ApiController]
[Route("[controller]")]
public class ReminderController : ControllerBase
{
    private readonly IReminderStore _reminderStore;

    public ReminderController(IReminderStore reminderStore)
    {
        _reminderStore = reminderStore;
    }
    
    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Reminder>> CreateReminder([FromBody] CreateReminderRequest request)
    {
        var reminder = new Reminder(request);
        await _reminderStore.CreateReminder(reminder);

        return reminder;
    }

    [HttpGet]
    [Route("ListReminders/{userId}")]
    public async Task<ActionResult<List<Reminder>>> GetRemindersById(int userId)
    {
        var reminders = await _reminderStore.GetRemindersByUserId(userId);
        if(reminders.Count == 0)
        {
            return NotFound(String.Format("Não existem lembretes associados ao usuário {0}"));
        }
        return reminders;
    }

    [HttpGet]
    [Route("search/{id}")]
    public async Task<ActionResult<Reminder>> GetReminderByid(int id)
    {        
        var reminder = await _reminderStore.GetReminderByid(id);
        if(reminder == null)
        {
            return NotFound("Item não encontrado");
        }
        return reminder;
    }

    [HttpPatch]
    [Route("update/{id}")]
    public async Task<ActionResult<Reminder>> UpdateReminder(int id, [FromBody] ReminderDTO request)
    {
        var reminder = await _reminderStore.GetReminderByid(id);
        if(reminder == null)
        {
            return NotFound("Item não encontrado");
        }
        reminder.UpdateReminder(request);
        await _reminderStore.UpdateReminder(reminder);
        return reminder;
    } 

    [HttpDelete]
    [Route("delete/{id}")]
    public async Task DeleteReminder(int id)
    {
        var reminder = _reminderStore.GetReminderByid(id);
        if(reminder == null)
        {
            NotFound("Item não encontrado");
        }
        await _reminderStore.DeleteReminder(id);
    }

}