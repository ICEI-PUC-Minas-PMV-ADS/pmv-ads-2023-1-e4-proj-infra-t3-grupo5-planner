using Core.Entities;
using Core.Requests;
using Core.Stores;
using Core.Entities.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpensesController : ControllerBase
{
    /*
    private readonly IMoodStore _moodStore;

    public MoodController(IMoodStore moodStore)
    {
        _moodStore = moodStore;
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Mood>> CreateMood([FromBody] CreateMoodRequest request)
    {

            var mood = new Mood(request);
            await _moodStore.CreateMood(mood);

            return CreatedAtAction("GetMoodById", new { id = mood.Id }, mood);

    }

    [HttpGet("mood/{id}")]
    public async Task<ActionResult<Mood>> GetMoodById(int id)
    {
        var mood = await _moodStore.GetMoodById(id);

        if (mood == null)
        {
            return NotFound();
        }

        return mood;
    }

    [HttpGet("moods")]
    public async Task<ActionResult<IEnumerable<Mood>>> GetMood(int id)
    {
        var mood = await _moodStore.GetMood();

        if (mood == null)
        {
            return NotFound();
        }

        return Ok(mood);
    }

    [HttpPatch("mood/{id}")]
    public async Task<ActionResult<Mood>> UpdateMood(int id, [FromBody] MoodUpdateDto moodUpdateDto)
    {
        var mood = await _moodStore.GetMoodById(id);

        if (mood == null)
        {
            return NotFound();
        }

        mood.UpdateMood(moodUpdateDto);

        await _moodStore.Update(mood);
        return Ok();

    }

    [HttpDelete("mood/{id}")]
    public async Task DeleteMood(int id)
    {
        await _moodStore.Delete(id);

    }
    */
}