using Core.Entities.Interfaces;
using Core.Requests;
using Core.Entities.Dto;
using Core.Entities.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Core.Entities;

public class Tags : ITrackable
{
    [Key]
    public int TagId { get; private set; } 
    public int UserId { get; private set; }
    [ForeignKey("Expenses")]
    public int ExpensesId { get; private set; }
    public string Name { get; private set; }
    public IsExpenses IsExpense { get; private set; }
    public float Amount {get; private set;}
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public DateTime? DeletedOn { get; set; }
    public Expenses Expenses { get; set; }
    
    // Tech debt: wee need an empty constructor for EF.
    private Tags() {}

    public Tags(CreateTagsRequest request)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));
        if (request.UserId <= 0) throw new ArgumentException("UserId deve ser maior que zero", nameof(request));
        if (request.ExpensesId <= 0) throw new ArgumentException("ExpensesId deve ser maior que zero", nameof(request));
        if (string.IsNullOrWhiteSpace(request.Name)) throw new ArgumentException("Name não pode ser nulo ou vazio", nameof(request));

        UserId = request.UserId;
        ExpensesId = request.ExpensesId;
        Name = request.Name;
        Amount = request.Amount;
        IsExpense = request.IsExpense;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateTags(TagsDto tagsDto)
    {
        if (tagsDto == null) throw new ArgumentNullException(nameof(tagsDto));
        if (string.IsNullOrWhiteSpace(tagsDto.Name)) throw new ArgumentException("Name não pode ser nulo ou vazio", nameof(tagsDto));
        
        Name = tagsDto.Name;
        IsExpense = tagsDto.IsExpense;
        Amount = tagsDto.Amount;
        UpdatedOn = DateTime.UtcNow;
    }
}
