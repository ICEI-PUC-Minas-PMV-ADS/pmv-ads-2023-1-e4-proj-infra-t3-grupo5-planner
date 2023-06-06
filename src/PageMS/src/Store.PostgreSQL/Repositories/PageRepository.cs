using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using System.Xml;

namespace Store.PostgreSQL.Repositories;

public class PageRepository : IPageStore
{
    private readonly Context _context;

    public PageRepository(Context context)
    {
        _context = context;
    }
    public async Task<Page> CreatePage(Page page)
    {
        _context.Pages.Add(page);
        await _context.SaveChangesAsync();
        return page;
    }

    public async Task<IEnumerable<Page>> GetPage()
    {
        return await _context.Pages.ToListAsync();
    }

    public async Task<Page?> GetPageById(int id)
    {
        return await _context.Pages.FindAsync(id);
    }

    public async Task<Page> Update(Page page)
    {
        _context.Entry(page).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return page;
    }

    public async Task Delete(int id)
    {
        var page = await _context.Pages.FindAsync(id);
        if (page != null)
        {
            _context.Pages.Remove(page);
            await _context.SaveChangesAsync();
        }
    }
}