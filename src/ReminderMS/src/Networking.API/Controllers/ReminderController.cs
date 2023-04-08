using Core.Entities;
using Core.Exceptions;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;
//TODO: Criar o controle do Reminder
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
        return null;
    }
}