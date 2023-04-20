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

    public async Task<List<Reminder>> GetRemindersByUserId(int id)
    {
        return await _context.Reminder.Where(u => u.UserId == id).ToListAsync();
    }

    public async Task<Reminder> GetReminderByid(int id)
    {
        var reminder = await _context.Reminder.FirstOrDefaultAsync(u => u.Id == id);

        return reminder == null ? null : reminder;
    }
}