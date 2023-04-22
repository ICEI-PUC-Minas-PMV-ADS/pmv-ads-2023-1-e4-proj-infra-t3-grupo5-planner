using Core.Entities;
using Core.Entities.Interfaces;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

namespace Store.PostgreSQL.Repositories
{
    public class GoalRepository : IGoalStore
    {
        private readonly Context _context;

        public GoalRepository(Context context)
        {
            _context = context;
        }

        public async Task CreateGoal(Goal goal)
        {
            _context.Goals.Add(goal);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Goal>> GetGoalsByUserId(int id)
        {
            return await _context.Goals.Where(h => h.UserId == id).ToListAsync();
        }

        public async Task<Goal?> GetGoalById(int id)
        {
            return await _context.Goals.FindAsync(id);
        }

        public async Task Delete(int id)
        {
            var goal = await _context.Goals.FindAsync(id);
            if (goal != null)
            {
                _context.Goals.Remove(goal);
                await _context.SaveChangesAsync();
            }
        }

         public async Task UpdateGoal(Goal goal, DateTime? updatedOn)
    {
        goal.UpdateGoal(updatedOn);
        _context.Goals.Update(goal);
        await _context.SaveChangesAsync();
    }
    }
}
