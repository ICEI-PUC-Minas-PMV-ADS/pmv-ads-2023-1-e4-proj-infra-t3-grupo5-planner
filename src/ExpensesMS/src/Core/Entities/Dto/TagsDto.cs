using Core.Entities.Enums;

namespace Core.Entities.Dto;
public class TagsDto
{
    public string Name { get; private set; }
    public IsExpenses IsExpense { get; private set; }
    public float Amount {get; private set;}
}