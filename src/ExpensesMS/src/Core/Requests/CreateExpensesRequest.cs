using Core.Entities.Enums;
namespace Core.Requests;

public class CreateExpensesRequest
{
    public CurrentExpenses CurrentExpenses { get; set; }
   
}