using Core.Entities;
using Core.Exceptions;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class WidgetCheckboxController : ControllerBase
{
    private readonly IWidgetCheckboxStore _checkboxStore;

    public WidgetCheckboxController(IWidgetCheckboxStore checkboxStore)
    {
        _checkboxStore = checkboxStore;
    }


    [HttpGet]
    [Route("getlist")]
    public async Task<IEnumerable<WidgetCheckbox>> GetChecklist()
    {
        return await _checkboxStore.GetChecklist();
    }

    [HttpPost]
    [Route("create")]
    public async Task<int> CreateCheckbox([FromBody] WidgetCheckboxRequest request)
    {

        var checkbox = new WidgetCheckbox(request);
        return  await _checkboxStore.CreateWidgetCheckbox(checkbox);
    }

    [HttpPut]
    [Route("update")]
    public async Task<int> UpdateWidgetCheckbox([FromBody] WidgetCheckboxRequest request) 
    {
        var checkbox = new WidgetCheckbox(request);
        return await _checkboxStore.UpdateWidgetCheckbox(checkbox);
    }

    [HttpDelete]
    [Route("delete/{id}")]
    public async Task<int> DeleteWidgetCheckbox([FromQuery] int Id)
    {
        return await _checkboxStore.DeleteWidgetCheckbox(Id);
    }

}