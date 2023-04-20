using Core.Entities;

namespace Core.Stores;

public interface IReminderStore
{
    public Task CreateReminder(Reminder reminder);
    public Task<List<Reminder>> GetReminder();
}