using Core.Entities.Interfaces;
using Core.Requests;
using Core.Entities.Dto;
using Core.Entities.Enums;
using System.ComponentModel.DataAnnotations;


namespace Core.Entities;

public class Tags : ITrackable
{
    [Key]
    public int TagId { get; private set; } 
    public int UserId { get; private set; }
    public string Name { get; private set; }
    public IsExpenses IsExpense { get; private set; }
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public DateTime? DeletedOn { get; set; }

    public ICollection<Expenses> Expenses { get; set; } // relação de muitos para muitos
    // Tech debt: wee need an empty constructor for EF.
    private Tags() {}

    public Tags(CreateTagsRequest request)
    {
        UserId = request.UserId;
        Name = request.Name;
        IsExpense = IsExpenses.True;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateExpenses(ExpensesDto ExpensesDto)
    {
        
    }
}
