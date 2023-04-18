using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

namespace Store.PostgreSQL.Repositories;

public class PageRepository : IPageStore
{
    private readonly Context _context;

    public PageRepository(Context context)
    {
        _context = context;
    }
    public async Task CreatePage(Page page)
    {
        _context.Pages.Add(page);
        await _context.SaveChangesAsync();
    }

    public async Task<Page> GetPageById(int id)
    {
        return await _context.Pages.FindAsync(id);
    }

    public async Task<List<Page>> GetPage()
    {
        return await _context.Pages.ToListAsync();
    }
}