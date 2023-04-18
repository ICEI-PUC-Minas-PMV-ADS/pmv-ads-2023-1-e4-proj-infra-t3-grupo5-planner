using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

namespace Store.PostgreSQL.Repositories;

public class MoodRepository : IMoodStore
{
    private readonly Context _context;

    public MoodRepository(Context context)
    {
        _context = context;
    }
    public async Task CreateMood(Mood mood)
    {
        _context.Moods.Add(mood);
        await _context.SaveChangesAsync();
    }

    public async Task<Mood> GetMoodById(int id)
    {
        return await _context.Moods.FindAsync(id);
    }

    public async Task<List<Mood>> GetMood()
    {
        return await _context.Moods.ToListAsync();
    }
}