using Core.Entities;

namespace Core.Stores;

public interface IMoodStore
{
    public Task<int> CreateMood(Mood mood);
    public Task<Mood> GetMood();
}