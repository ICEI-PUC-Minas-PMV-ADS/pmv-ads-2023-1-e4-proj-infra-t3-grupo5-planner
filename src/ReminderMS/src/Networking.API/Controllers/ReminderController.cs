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
        return await _reminderStore.GetReminder();
    }
    
}