using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class WidgetCheckboxRepository : ITaskStore
{

    public Task<IEnumerable<System.Threading.Tasks.Task>> GetChecklist()
    {
        throw new NotImplementedException();
    }

    public Task<int> CreateWidgetCheckbox(Core.Entities.Task Checkbox)
    {
        throw new NotImplementedException();
    }

    public Task<int> UpdateWidgetCheckbox(Core.Entities.Task Checkbox)
    {
        throw new NotImplementedException();
    }

    public Task<int> DeleteWidgetCheckbox(int Id)
    {
        throw new NotImplementedException();
    }
}