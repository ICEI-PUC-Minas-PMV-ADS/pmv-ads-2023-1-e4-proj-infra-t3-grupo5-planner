using Core.Entities.Enums;

namespace Core.Entities.Dto;
public class TagsDto
{
    public string Name { get; set; }
    public IsExpenses IsExpense { get; set; }
    public float Amount {get; set;}
}