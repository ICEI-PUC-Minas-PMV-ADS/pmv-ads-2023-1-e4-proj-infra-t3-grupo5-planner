using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MoodController : ControllerBase
{
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
            return await _moodStore.GetMood();
    }
}