using Core.Entities;
using Core.Exceptions;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class TaskController : ControllerBase
{
    private readonly ITaskStore _tasksStore;

    public TaskController(ITaskStore tasksStore)
    {
        _tasksStore = tasksStore;
    }


    [HttpGet]
    [Route("gettask")]
    public async Task<IEnumerable<System.Threading.Tasks.Task>> GetTasks()
    {
        return await _tasksStore.GetTasks();
    }

    [HttpPost]
    [Route("create")]
    public async Task<int> CreateTasks([FromBody] TaskRequest request)
    {

        var task = new Core.Entities.Task(request);
        return await _tasksStore.CreateTask(task);
    }

    [HttpPut]
    [Route("update")]
    public async Task<int> UpdateTask([FromBody] TaskRequest request) 
    {
        var task = new Core.Entities.Task(request);
        return await _tasksStore.UpdateTask(task);
    }

    [HttpDelete]
    [Route("delete/{id}")]
    public async Task<int> DeleteTask([FromQuery] int Id)
    {
        return await _tasksStore.DeleteTask(Id);
    }

}