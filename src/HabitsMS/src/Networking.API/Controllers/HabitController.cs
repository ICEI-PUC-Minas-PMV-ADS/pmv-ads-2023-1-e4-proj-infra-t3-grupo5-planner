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
        await _habitStore.CreateHabit(habit);

        return habit;
    }

    [HttpGet("habit/{id}")]
    public async Task<ActionResult<Habit>> GetHabitById(int id)
    {
        var habit = await _habitStore.GetHabitById(id);

        if (habit == null)
        {
            return NotFound();
        }

        return habit;
    }

    [HttpDelete("habit/{id}")]
    public async Task DeleteHabit(int id)
    {
        await _habitStore.Delete(id);

    }

    [HttpGet("habitsList/{UserId}")]
    public async Task<ActionResult<List<Habit>>> GetHabitsById(int UserId)
    {
        var habits = await _habitStore.GetHabitsByUserId(UserId);

        if (habits == null)
        {
            return StatusCode(404);
        }

        return habits;
    }

    [HttpPut("habit/{id}")]
    public async Task<IActionResult> UpdateHabit(int id, UpdateHabitRequest request)
    {
        var habit = await _habitStore.GetHabitById(id);
        if (habit == null)
        {
            return NotFound();
        }

        habit.Update(request);
        await _habitStore.UpdateHabit(habit, DateTime.UtcNow);
        return Ok(habit);
    }
}


