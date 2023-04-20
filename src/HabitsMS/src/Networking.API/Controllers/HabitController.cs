using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class HabitController : ControllerBase
{
    private readonly IHabitStore _habitStore;

    public HabitController(IHabitStore habitStore)
    {
        _habitStore = habitStore;
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Habit>> CreateHabit([FromBody] CreateHabitRequest request)
    {
      
            var habit = new Habit(request);
            return await _habitStore.GetHabit();      
    }
}