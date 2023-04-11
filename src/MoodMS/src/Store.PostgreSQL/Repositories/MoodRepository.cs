using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class MoodRepository : IMoodStore
{
    public Task<int> CreateMood(Mood mood)
    {
        throw new NotImplementedException();
    }

    public Task<Mood> GetMood()
    {
        throw new NotImplementedException();
    }
}