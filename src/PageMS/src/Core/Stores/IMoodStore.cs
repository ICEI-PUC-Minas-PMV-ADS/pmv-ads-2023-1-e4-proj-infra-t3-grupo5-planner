using Core.Entities;

namespace Core.Stores;

public interface IMoodStore
{
    public Task CreateMood(Mood mood);
    public Task<List<Mood>> GetMood();
    public Task<Mood> GetMoodById(int id);
}