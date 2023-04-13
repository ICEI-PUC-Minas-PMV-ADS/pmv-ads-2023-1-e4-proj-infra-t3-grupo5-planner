using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class ReminderRepository : IReminderStore
{
    public Task<int> CreateReminder(Reminder reminder)
    {
        throw new NotImplementedException();
    }

    public Task<Reminder> GetReminder()
    {
        throw new NotImplementedException();
    }
}