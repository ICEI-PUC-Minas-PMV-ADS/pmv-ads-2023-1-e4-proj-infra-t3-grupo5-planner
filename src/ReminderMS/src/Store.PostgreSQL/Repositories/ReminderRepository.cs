using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

namespace Store.PostgreSQL.Repositories;

public class ReminderRepository : IReminderStore
{
    private readonly Context _context;

    public ReminderRepository(Context context)
    {
        _context = context;
    }

    public async Task CreateReminder(Reminder reminder)
    {
        _context.Reminder.Add(reminder);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Reminder>> GetReminder()
    {
        return await _context.Reminder.ToListAsync();
    }
}