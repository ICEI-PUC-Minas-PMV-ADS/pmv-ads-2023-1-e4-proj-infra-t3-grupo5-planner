using Core.Entities;

namespace Core.Stores;

public interface IReminderStore
{
    public Task<int> CreateReminder(User user);
    public Task<User> GetReminder();
}