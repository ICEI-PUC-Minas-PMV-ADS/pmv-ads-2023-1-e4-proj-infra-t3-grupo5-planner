using System.Text.RegularExpressions;
using Core.Exceptions;

namespace Core.Requests;

public class TaskRequest
{
    public int Id { get; set; }
    public int ChecklistId { get; set; }
    public string Name { get; set; }
    public int IsCompleted { get; set; }
    public DateTime CompletionDate { get; private set; }

}