using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

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
    public async Task<ActionResult<List<Reminder>>> GetRemindersById(int UserId)
    {
        var reminders = await _reminderStore.GetRemindersByUserId(UserId);
        
        if(reminders == null || reminders.Count == 0){
            return StatusCode(404);
        }

        return reminders;
    }

    [HttpGet]
    [Route("search/{id}")]
    public async Task<ActionResult<Reminder>> GetReminderByid(int id){
        
        var reminder = await _reminderStore.GetReminderByid(id);
        
        if(reminder == null){
            return NotFound();
        }

        return reminder;
    }

}