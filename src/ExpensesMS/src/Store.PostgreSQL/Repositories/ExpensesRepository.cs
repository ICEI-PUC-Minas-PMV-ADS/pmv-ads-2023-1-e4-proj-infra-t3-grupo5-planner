using Core.Entities;
using Core.Entities.Dto;
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

    public async Task<Expenses?> GetExpensesById(int id)
    {
        return await _context.Expensess.FindAsync(id);
    }

    public async Task<IEnumerable<Expenses>> GetExpensesByUserId(int userId)
    {
        return await _context.Expensess.Where(e => e.UserId == userId).ToListAsync();
    }

    public async Task DeleteExpense(int id)
    {
        var expenses = await GetExpensesById(id);
        if (expenses != null)
        {
            _context.Expensess.Remove(expenses);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<Expenses?> InsertNewTagInExpenses(int expenseId, Tags tag)
    {
        var expense = await _context.Expensess.FindAsync(expenseId);
        if (expense != null)
        {   
            expense.Tags.Add(tag);
            await _context.SaveChangesAsync();
        }
        return expense;
    }
}