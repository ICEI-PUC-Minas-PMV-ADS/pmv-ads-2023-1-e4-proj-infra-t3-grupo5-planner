using Core.Entities;
using Core.Entities.Dto;

namespace Core.Stores;

public interface IExpensesStore
{
    public Task<Expenses> CreateExpenses(Expenses expenses);
    public Task<IEnumerable<Expenses>> GetExpensesByUserId(int userId);
    public Task<Expenses?> GetExpensesById(int id);
    public Task DeleteExpense(int id);
    public Task<Expenses> InsertNewTagInExpenses(int expenseId, Tags tag);
    public Task<IEnumerable<Tags>> GetTagsByExpenseId(int expenseId);   
    public Task<Tags> UpdateTagByTagId(int tagId, TagsDto tagsDto);
    public Task DeleteTagByTagId(int tagId);
}