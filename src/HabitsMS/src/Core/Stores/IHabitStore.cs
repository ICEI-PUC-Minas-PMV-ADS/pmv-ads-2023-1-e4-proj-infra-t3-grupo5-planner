using Core.Entities;

namespace Core.Stores;

public interface IHabitStore
{
    public Task<int> CreateHabit(Habit habit);
    public Task<Habit> GetHabit();
}