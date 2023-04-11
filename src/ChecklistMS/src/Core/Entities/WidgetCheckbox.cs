using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Exceptions;
using Core.Requests;

namespace Core.Entities;

public class WidgetCheckbox : ITrackable
{
    public int? Id { get; private set; }
    public string Description { get; private set;  }
    public bool Value { get; private set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    
    // Tech debt: wee need an empty constructor for EF.
    private WidgetCheckbox() {}

    public WidgetCheckbox(WidgetCheckboxRequest request)
    {
        Id = request.Id;
        Description = request.Description;
        Value = request.Value;
    }

}