using Core.Entities;

namespace Core.Stores;

public interface IWidgetCheckboxStore
{
    public Task<IEnumerable<WidgetCheckbox>> GetChecklist();
    public Task<int> CreateWidgetCheckbox(WidgetCheckbox Checkbox);
    public Task<int> UpdateWidgetCheckbox(WidgetCheckbox Checkbox);
    public Task<int> DeleteWidgetCheckbox(int Id);
    
}