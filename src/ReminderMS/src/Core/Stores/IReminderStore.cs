using Core.Entities;

namespace Core.Stores;

public interface IReminderStore
{
    public Task CreateReminder(Reminder reminder);
    public Task<List<Reminder>> GetReminder();
    public Task<List<Reminder>> GetRemindersByUserId(int id);
    public Task<Reminder> GetReminderByid(int id);
}