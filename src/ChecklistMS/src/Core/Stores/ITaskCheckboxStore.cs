using Core.Entities;
namespace Core.Stores;

public interface ITaskCheckboxStore
{
    public Task<IEnumerable<TaskCheckbox>> GetTaskCheckboxes();
    public Task<TaskCheckbox> CreateTaskCheckbox(TaskCheckbox taskCheckbox);
    public Task<TaskCheckbox?> GetCheckboxById(int id);
    public Task<TaskCheckbox> UpdateTaskCheckbox(TaskCheckbox taskCheckbox);
    public Task DeleteTaskCheckbox(int Id);
}