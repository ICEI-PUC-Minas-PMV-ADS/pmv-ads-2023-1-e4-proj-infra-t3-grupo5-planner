using Core.Entities;

namespace Core.Stores;

public interface IHabitStore
{
    public Task CreateHabit(Habit habit);
    public Task<List<Habit>> GetHabitsByUserId(int id);
    public Task<Habit?> GetHabitById(int id);
    public Task Delete(int id);
    public Task UpdateHabit(Habit habit, DateTime? updatedOn);
}



