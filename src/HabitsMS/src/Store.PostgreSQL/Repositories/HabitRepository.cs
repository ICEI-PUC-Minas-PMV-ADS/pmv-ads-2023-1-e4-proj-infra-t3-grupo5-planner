using Core.Entities;
using Core.Entities.Interfaces;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

namespace Store.PostgreSQL.Repositories;

public class HabitRepository : IHabitStore
{
    private readonly Context _context;

    public HabitRepository(Context context)
    {
        _context = context;
    }

    public async Task CreateHabit(Habit habit)
    {
        _context.Habits.Add(habit);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Habit>> GetHabitsByUserId(int id)
    {
        return await _context.Habits.Where(h => h.UserId == id).ToListAsync();
    }

    public async Task<Habit?> GetHabitById(int id)
    {
        return await _context.Habits.FindAsync(id);
    }
    public async Task Delete(int id)
    {
        var habit = await _context.Habits.FindAsync(id);
        if (habit != null)
        {
            _context.Habits.Remove(habit);
            await _context.SaveChangesAsync();
        }
    }

    public async Task UpdateHabit(Habit habit, DateTime? updatedOn)
{
    habit.UpdateHabit(updatedOn);
    _context.Habits.Update(habit);
    await _context.SaveChangesAsync();
}
 
}



