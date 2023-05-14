using Core.Entities;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using System.Xml;

namespace Store.PostgreSQL.Repositories;

public class TaskCheckboxRepository : ITaskCheckboxStore
{
    private readonly Context _context;

    public TaskCheckboxRepository(Context context)
    {
        _context = context;
    }

    public async Task<TaskCheckbox> CreateTaskCheckbox(TaskCheckbox taskCheckbox)
    {
        _context.TaskCheckbox.Add(taskCheckbox);
        await _context.SaveChangesAsync();
        return taskCheckbox;
    }
    public async Task<TaskCheckbox> UpdateTaskCheckbox(TaskCheckbox taskCheckbox)
    {
        _context.Entry(taskCheckbox).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return taskCheckbox;
    }

    public async Task<TaskCheckbox?> GetCheckboxById(int id)
    {
        return await _context.TaskCheckbox.FindAsync(id);
    }

    public async Task<IEnumerable<TaskCheckbox>> GetTaskCheckboxes()
    {
        return await _context.TaskCheckbox.ToListAsync();
    }

    public async Task DeleteTaskCheckbox(int id)
    {
        var taskcheckbox = await _context.TaskCheckbox.FindAsync(id);

        if (taskcheckbox != null)
        {
            _context.TaskCheckbox.Remove(taskcheckbox);
            await _context.SaveChangesAsync();
        }
    }
 
}

