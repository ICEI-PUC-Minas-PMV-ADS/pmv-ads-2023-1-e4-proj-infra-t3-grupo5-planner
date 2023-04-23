using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using System.Xml;

namespace Store.PostgreSQL.Repositories;

public class ChecklistRepository : IChecklistStore
{
    private readonly Context _context;

    public ChecklistRepository(Context context)
    {
        _context = context;
    }

    public async Task<Checklist> CreateChecklist(Checklist checklist)
    {

        _context.Checklist.Add(checklist);
        await _context.SaveChangesAsync();
        return checklist;
    }
    public async Task<Checklist> UpdateChecklist(Checklist checklist)
    {
        _context.Entry(checklist).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return checklist;
    }
    public async Task<Checklist?> GetChecklistById(int id)
    {
        return await _context.Checklist.FindAsync(id);
    }

    public async Task<IEnumerable<Checklist>> GetChecklist()
    {
        return await _context.Checklist.ToListAsync();
    }

    public async Task DeleteChecklist(int id)
    {
        var checklist = await _context.Checklist.FindAsync(id);
        if (checklist == null)
        {
            return;
        }

        var listaTaskCheckbox = await _context.TaskCheckbox.Where(t => t.IdChecklist == id)?.ToListAsync();

        if (listaTaskCheckbox?.Any() == true)
        {
            _context.TaskCheckbox.RemoveRange(listaTaskCheckbox);
        }

        _context.Checklist.Remove(checklist);
        await _context.SaveChangesAsync();
    }

}