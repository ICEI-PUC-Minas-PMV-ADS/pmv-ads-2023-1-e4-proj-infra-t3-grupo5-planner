using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class WidgetCheckboxRepository : IWidgetCheckboxStore
{

    public Task<IEnumerable<WidgetCheckbox>> GetChecklist()
    {
        throw new NotImplementedException();
    }

    public Task<int> CreateWidgetCheckbox(WidgetCheckbox Checkbox)
    {
        throw new NotImplementedException();
    }

    public Task<int> UpdateWidgetCheckbox(WidgetCheckbox Checkbox)
    {
        throw new NotImplementedException();
    }

    public Task<int> DeleteWidgetCheckbox(int Id)
    {
        throw new NotImplementedException();
    }
}