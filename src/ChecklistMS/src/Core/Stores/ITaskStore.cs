using Core.Entities;
namespace Core.Stores;

public interface ITaskStore
{
    public Task<IEnumerable<System.Threading.Tasks.Task>> GetTasks();
    public Task<int> CreateTask(Entities.Task Task);
    public Task<int> UpdateTask(Entities.Task Task);
    public Task<int> DeleteTask(int Id);
    
}