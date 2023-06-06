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
        _context.Expenses.Add(expenses);
        await _context.SaveChangesAsync();
        return expenses;
    }

    public async Task<Expenses?> GetExpensesById(int id)
    {
        return await _context.Expenses.FindAsync(id);
    }

    public async Task<IEnumerable<Expenses>> GetExpensesByUserId(int userId)
    {
        return await _context.Expenses.Where(e => e.UserId == userId).ToListAsync();
    }

    public async Task DeleteExpense(int id)
    {
        var expenses = await GetExpensesById(id);
        if (expenses != null)
        {
            _context.Expenses.Remove(expenses);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<Expenses> InsertNewTagInExpenses(int expenseId, Tags tag)
    {
        var expense = await _context.Expenses.Include(e => e.TagsOnExpense).FirstOrDefaultAsync(e => e.Id == expenseId);
        if(expense != null)
        {
            expense.TagsOnExpense.Add(tag);
            await _context.Tags.AddAsync(tag);
            await _context.SaveChangesAsync();
        }
        return expense;
    }

    public async Task<IEnumerable<Tags>> GetTagsByExpenseId(int expenseId)
    {
        return await _context.Tags.Where(e => e.ExpensesId == expenseId).ToListAsync();
    }

    public async Task<Tags> UpdateTagByTagId(int tagId, TagsDto tagsDto)
    {
        var tag = await _context.Tags.FindAsync(tagId);
        if(tag != null)
        {
            tag.UpdateTags(tagsDto);
            await _context.SaveChangesAsync();
        }   
        return tag;
    }

    public async Task DeleteTagByTagId(int tagId)
    {
        var tag = await _context.Tags.FindAsync(tagId);
        if (tag != null)
        {
            _context.Tags.Remove(tag);
            await _context.SaveChangesAsync();
        }
    }

}