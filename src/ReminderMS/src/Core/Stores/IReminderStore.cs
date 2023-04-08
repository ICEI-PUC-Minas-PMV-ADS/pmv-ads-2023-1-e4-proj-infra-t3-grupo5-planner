using Core.Entities;

namespace Core.Stores;

public interface IReminderStore
{
    public Task<int> CreateReminder(Reminder reminder);
    public Task<Reminder> GetReminder();
}