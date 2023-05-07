using Core.Entities.Enums;

namespace Core.Requests;

public class CreateTagsRequest
{
    public int UserId { get; set; }
    public string Name { get; set; }
    public IsExpenses IsExpense { get; set; }
    public float Amount {get; set;}
}