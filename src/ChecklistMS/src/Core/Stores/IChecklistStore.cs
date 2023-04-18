using Core.Entities;
namespace Core.Stores;

public interface IChecklistStore
{
    public Checklist<IEnumerable<System.Threading.Checklist>> GetTasks();
    public Checklist<int> CreateChecklist(Entities.Checklist Checkbox);
    public Checklist<int> UpdateChecklist(Entities.Checklist Checkbox);
    public Checklist<int> DeleteChecklist(int Id);

}
