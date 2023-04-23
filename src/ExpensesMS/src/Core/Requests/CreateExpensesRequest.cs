namespace Core.Requests;

public class CreateExpensesRequest
{
    public int UserId { get; set; }
    //public int TagId { get; set; }
    public float Amount { get; set; }
   
}