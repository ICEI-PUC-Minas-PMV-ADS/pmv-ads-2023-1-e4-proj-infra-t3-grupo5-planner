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

    public async Task UpdateReminder(Reminder reminder)
    {
        _context.Entry(reminder).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task<List<Reminder>> GetRemindersByUserId(int id)
    {
        return await _context.Reminder.Where(u => u.UserId == id).ToListAsync();
    }

    public async Task<Reminder> GetReminderByid(int id)
    {       
        return await _context.Reminder.FirstOrDefaultAsync(u => u.Id == id);;
    }
    public async Task DeleteReminder(int id)
    {
        _context.Reminder.Remove(await _context.Reminder.FindAsync(id));
        await _context.SaveChangesAsync();
    }
}