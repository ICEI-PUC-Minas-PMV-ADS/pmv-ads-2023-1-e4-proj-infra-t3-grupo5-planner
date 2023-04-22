using Core.Entities.Interfaces;
using Core.Requests;
using Core.Entities.Dto;

namespace Core.Entities;

public class Expenses : ITrackable
{
    public int Id { get; private set; }
    public CurrentExpenses CurrentExpenses { get; private set; }    
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public DateTime? DeletedOn { get; private set; }

    // Tech debt: wee need an empty constructor for EF.
    private Expenses() {}

    public Expenses(CreateExpensesRequest request)
    {
        CurrentExpenses = request.CurrentExpenses;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateExpenses(ExpensesUpdateDto ExpensesUpdateDto)
    {
        CurrentExpenses = ExpensesUpdateDto.CurrentExpenses;
    }

    public CurrentExpenses GetCurrentExpenses()
    {
        return CurrentExpenses;
    }
}