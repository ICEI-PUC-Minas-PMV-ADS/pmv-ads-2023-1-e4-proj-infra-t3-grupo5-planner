using Core.Entities;

namespace Core.Stores;

public interface IPageStore
{
    public Task<Page> CreatePage(Page page);
    public Task<IEnumerable<Page>> GetPage();
    public Task<Page?> GetPageById(int id);
    public Task<Page> Update(Page page);
    public Task Delete(int id);
}