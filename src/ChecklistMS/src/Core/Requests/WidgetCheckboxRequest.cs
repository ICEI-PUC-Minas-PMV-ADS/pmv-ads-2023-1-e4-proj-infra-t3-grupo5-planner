using System.Text.RegularExpressions;
using Core.Exceptions;

namespace Core.Requests;

public class WidgetCheckboxRequest
{
    public int? Id { get; set; }
    public string Description { get; set; }
    public bool Value { get; set; }

}