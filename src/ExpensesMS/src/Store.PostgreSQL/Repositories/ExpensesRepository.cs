﻿using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using System.Xml;

namespace Store.PostgreSQL.Repositories;

public class ExpensesRepository : IExpensesStore
{

    private readonly Context _context;

    public ExpensesRepository(Context context)
    {
        _context = context;
    }
    public async Task<Expenses> CreateExpenses(Expenses expenses)
    {
        _context.Expensess.Add(expenses);
        await _context.SaveChangesAsync();
        return expenses;
    }

    public async Task<Expenses> GetExpensesById(int id)
    {
        return await _context.Expensess.FindAsync(id);
    }

    public async Task<Tags> CreateTagToExpenses(Tags tag, int expenseId)
    {
        var expense = await GetExpensesById(expenseId);
        
    }
    /*
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
    */
}