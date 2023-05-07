using Core.Entities;
using Core.Requests;
using Core.Stores;
using Core.Entities.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpensesController : ControllerBase
{
    private readonly IExpensesStore _expesesStore;

    public ExpensesController(IExpensesStore expensesStore)
    {
        _expesesStore = expensesStore;
    }

    [HttpGet]
    [Route("{userId}")]
    public async Task<IEnumerable<Expenses>> GetExpensesByUserId(int userId)
    {
        return await _expesesStore.GetExpensesByUserId(userId);
    }

    [HttpPost]
    [Route("")]
    public async Task<Expenses> CreateExpense([FromBody] CreateExpensesRequest request)
    {
        var expense = new Expenses(request);
        return await _expesesStore.CreateExpenses(expense);  
    }

    [HttpDelete]
    [Route("{expenseId}")]
    public async Task DeleteExpense(int expenseId)
    {
        await _expesesStore.DeleteExpense(expenseId);
    }

    [HttpPut]
    [Route("newTag/{expenseId}")]
    public async Task<Expenses> InsertNewTagsInExpenses([FromBody] CreateTagsRequest request, int expenseId)
    {
        var newTag = new Tags(request);
        var expense = await _expesesStore.GetExpensesById(expenseId);
        if(newTag != null)
        {
            if(expense != null)
            {
                return await _expesesStore.InsertNewTagInExpenses(expenseId, newTag);
            }
        }
        return expense;
    }
}