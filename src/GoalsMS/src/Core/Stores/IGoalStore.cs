using Core.Entities;

namespace Core.Stores;

public interface IGoalStore
{
    public Task CreateGoal(Goal goal);
    public Task<List<Goal>> GetGoalsByUserId(int id);
    public Task<Goal?> GetGoalById(int id);
    public Task Delete(int id);
    public Task UpdateGoal(Goal goal, DateTime? updatedOn);
}



