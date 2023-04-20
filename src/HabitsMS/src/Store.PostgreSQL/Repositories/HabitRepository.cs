using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class HabitRepository : IHabitStore
{
    public Task<int> CreateHabit(Habit habit)
    {
        throw new NotImplementedException();
    }

    public Task<Habit> GetHabit()
    {
        throw new NotImplementedException();
    }
}