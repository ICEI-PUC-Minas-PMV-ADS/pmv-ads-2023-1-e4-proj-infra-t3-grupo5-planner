using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class TaskCheckboxController : ControllerBase
{
    private readonly ITaskCheckboxStore _taskCheckboxStore;

    public TaskCheckboxController(ITaskCheckboxStore taskCheckboxStore)
    {
        _taskCheckboxStore = taskCheckboxStore;
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Checklist>> CreateTaskCheckbox([FromBody] TaskCheckboxRequest request)
    {
        request.Name = "Novo Checkbox";
        request.IsCompleted = false;

        var taskCheckbox= new TaskCheckbox(request);

        await _taskCheckboxStore.CreateTaskCheckbox(taskCheckbox);

        return CreatedAtAction("GetCheckboxtById", new { id = taskCheckbox.Id }, taskCheckbox);

    }

    [HttpGet("taskcheckbox/{id}")]
    public async Task<ActionResult<TaskCheckbox>> GetCheckboxById(int id)
    {
        var taskCheckbox = await _taskCheckboxStore.GetCheckboxById(id);

        if (taskCheckbox == null)
        {
            return NotFound();
        }
        return taskCheckbox;
    }


    [HttpGet("taskcheckboxes")]
    public async Task<ActionResult<IEnumerable<TaskCheckbox>>> GetTaskCheckboxes(int id)
    {
        var taskCheckboxes = await _taskCheckboxStore.GetTaskCheckboxes();

        if (taskCheckboxes == null)
        {
            return NotFound();
        }

        return Ok(taskCheckboxes);
    }


    [HttpPatch("update")]

    public async Task<ActionResult<Checklist>> UpdateTaskCheckbox([FromBody] TaskCheckboxRequest taskcheckboxrequest)
    {
        var taskCheckbox = await _taskCheckboxStore.GetCheckboxById(taskcheckboxrequest.Id);

        if (taskCheckbox == null)
        {
            return NotFound();
        }

        taskCheckbox.UpdateTaskCheckbox(taskcheckboxrequest);
        await _taskCheckboxStore.UpdateTaskCheckbox(taskCheckbox);
        return Ok(taskCheckbox);

    }

    [HttpDelete]
    [Route("delete/{id}")]
    public async Task DeleteTaskCheckbox(int id)
    {
        await _taskCheckboxStore.DeleteTaskCheckbox(id);
    }


}