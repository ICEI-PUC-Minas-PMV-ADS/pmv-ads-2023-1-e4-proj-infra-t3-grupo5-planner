namespace Core.Requests;

public class TaskCheckboxRequest
{
    public int Id { get; set; }
    public int IdChecklist { get; set; }
    public string Name { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime CompletionDate { get; private set; }

}