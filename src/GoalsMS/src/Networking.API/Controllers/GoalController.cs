using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoalController : ControllerBase
    {
        private readonly IGoalStore _goalStore;

        public GoalController(IGoalStore goalStore)
        {
            _goalStore = goalStore;
        }

        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<Goal>> CreateGoal([FromBody] CreateGoalRequest request)
        {
            var goal = new Goal(request);
            await _goalStore.CreateGoal(goal);

            return goal;
        }

        [HttpGet("goal/{id}")]
        public async Task<ActionResult<Goal>> GetGoalById(int id)
        {
            var goal = await _goalStore.GetGoalById(id);

            if (goal == null)
            {
                return NotFound();
            }

            return goal;
        }

        [HttpDelete("goal/{id}")]
        public async Task DeleteGoal(int id)
        {
            await _goalStore.Delete(id);
        }

        [HttpGet("goalsList/{userId}")]
        public async Task<ActionResult<List<Goal>>> GetGoalsById(int userId)
        {
            var goals = await _goalStore.GetGoalsByUserId(userId);

            if (goals == null)
            {
                return StatusCode(404);
            }

            return goals;
        }

        [HttpPut("goal/{id}")]
        public async Task<IActionResult> UpdateGoal(int id, [FromBody] UpdateGoalRequest request)
        {
            var goal = await _goalStore.GetGoalById(id);
            if (goal == null)
            {
                return NotFound();
            }

            var newProgress = request.Progress;
            if (newProgress > goal.Target)
            {
                return BadRequest("O valor do progresso não pode ser maior que o valor da meta final");
            }

            goal.Progress = newProgress;

            if (newProgress == goal.Target)
            {
                goal.ReachedAt = DateTime.UtcNow;
            }

            await _goalStore.UpdateGoal(goal, DateTime.UtcNow);
            return Ok(goal);
        }



    }
}
