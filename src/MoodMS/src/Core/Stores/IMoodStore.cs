using Core.Entities;

namespace Core.Stores;

public interface IMoodStore
{
    public Task<Mood> CreateMood(Mood mood);
    public Task<IEnumerable<Mood>> GetMood();
    public Task<Mood?> GetMoodById(int id);
    public Task Update(Mood mood);
    public Task Delete(int id);
}