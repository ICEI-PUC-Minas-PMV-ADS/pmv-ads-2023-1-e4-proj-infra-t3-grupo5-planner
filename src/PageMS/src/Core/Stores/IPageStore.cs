using Core.Entities;

namespace Core.Stores;

public interface IPageStore
{
    public Task CreatePage(Page page);
    public Task<List<Page>> GetPage();
    public Task<Page> GetPageById(int id);
}