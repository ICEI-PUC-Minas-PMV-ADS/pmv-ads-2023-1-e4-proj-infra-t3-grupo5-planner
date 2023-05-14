using Core.Entities;
namespace Core.Stores;

public interface IChecklistStore
{
    public Task<IEnumerable<Checklist>> GetChecklist();
    public Task<Checklist> CreateChecklist(Checklist Checklist);
    public Task<Checklist?> GetChecklistById(int id);
    public Task<Checklist> UpdateChecklist(Checklist Checklist);
    public Task DeleteChecklist(int Id);

}