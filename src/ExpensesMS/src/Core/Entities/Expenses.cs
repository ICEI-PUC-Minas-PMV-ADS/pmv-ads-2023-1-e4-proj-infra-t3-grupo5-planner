using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class Expenses : ITrackable
{
    public int Id { get; private set; } 
    public int UserId { get; private set; }
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public ICollection<Tags> TagsOnExpense { get; set; }// relação de muitos para muitos
    
    // Tech debt: wee need an empty constructor for EF.
    private Expenses() {}

    public Expenses(CreateExpensesRequest request)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));
        if (request.UserId <= 0) throw new ArgumentException("UserId deve ser maior que zero", nameof(request));
        UserId = request.UserId;
        TagsOnExpense = new List<Tags>();
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }
}
