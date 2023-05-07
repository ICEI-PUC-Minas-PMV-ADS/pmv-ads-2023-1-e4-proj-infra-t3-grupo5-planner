using Core.Entities.Interfaces;
using Core.Requests;
using Core.Entities.Dto;

namespace Core.Entities;

public class Expenses : ITrackable
{
    public int Id { get; private set; } 
    public int UserId { get; private set; }
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public ICollection<Tags> Tags { get; set; } // relação de muitos para muitos
    
    // Tech debt: wee need an empty constructor for EF.
    private Expenses() {}

    public Expenses(CreateExpensesRequest request)
    {
        UserId = request.UserId;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateExpenses(ExpensesDto ExpensesDto)
    {
        
    }
}
