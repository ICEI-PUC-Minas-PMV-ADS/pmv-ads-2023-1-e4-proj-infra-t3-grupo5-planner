using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using System.Xml;

namespace Store.PostgreSQL.Repositories;

public class MoodRepository : IMoodStore
{
    private readonly Context _context;

    public MoodRepository(Context context)
    {
        _context = context;
    }
    public async Task<Mood> CreateMood(Mood mood)
    {
        _context.Moods.Add(mood);
        await _context.SaveChangesAsync();
        return mood;
    }

    public async Task<IEnumerable<Mood>> GetMood()
    {
        return await _context.Moods.ToListAsync();
    }

    public async Task<Mood?> GetMoodById(int id)
    {
        return await _context.Moods.FindAsync(id);
    }

    public async Task Update(Mood mood)
    {
        _context.Entry(mood).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task Delete(int id)
    {
        var mood = await _context.Moods.FindAsync(id);
        if (mood != null)
        {
            _context.Moods.Remove(mood);
            await _context.SaveChangesAsync();
        }
    }
}