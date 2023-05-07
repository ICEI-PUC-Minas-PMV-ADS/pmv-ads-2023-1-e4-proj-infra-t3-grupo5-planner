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
    [Route("getByUserId/{userId}")]
    public async Task<IEnumerable<Expenses>> GetExpensesByUserId(int userId)
    {
        return await _expesesStore.GetExpensesByUserId(userId);
    }

    [HttpGet]
    [Route("getByExpensesId/{expensesId}")]
    public async Task<Expenses?> GetExpensesByExpensesId(int expensesId)
    {
        return await _expesesStore.GetExpensesById(expensesId);
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

    [HttpPost]
    [Route("tags/{expenseId}")]
    public async Task<ActionResult<Expenses>> InsertNewTagsInExpenses([FromBody] CreateTagsRequest request, int expenseId)
    {
        var expense = await _expesesStore.GetExpensesById(expenseId);
        if(expense != null)
        {
            request.ExpensesId = expenseId;
            request.UserId = expense.UserId;
            var newTag = new Tags(request);
            var updatedExpense = await _expesesStore.InsertNewTagInExpenses(expenseId, newTag);

            if (updatedExpense != null)
            {
                return Ok(updatedExpense);
            }
            else
            {
                return BadRequest();
            }
        }

        return NotFound();
    }

    [HttpGet]
    [Route("tags/{expenseId}")]
    public async Task<ActionResult<IEnumerable<Tags>>> GetTagsByExpenseId(int expenseId)
    {
        var tags = await _expesesStore.GetTagsByExpenseId(expenseId);

        if (tags == null)
        {
            return NotFound();
        }

        return Ok(tags);
    }

    [HttpPut]
    [Route("tags/{tagId}")]
    public async Task<ActionResult<Tags>> UpdateTagByTagId(int tagId, [FromBody] TagsDto tagsDto)
    {
        var tag = await _expesesStore.UpdateTagByTagId(tagId, tagsDto);
        if(tag == null)
        {
            return NotFound();
        }
        return tag;
    }

    [HttpDelete]
    [Route("tags/{tagId}")]
    public async Task DeleteTagByTagId(int tagId)
    {
        await _expesesStore.DeleteTagByTagId(tagId);
    }

}