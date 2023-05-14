using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class ChecklistController : ControllerBase
{
    private readonly IChecklistStore _checklistStore;

    public ChecklistController(IChecklistStore checklistStore)
    {
        _checklistStore = checklistStore;
    }



    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Checklist>> CreateTasks([FromBody] ChecklistRequest request)
    {
        request.Title = "Nova Checklist";

        var checklist = new Checklist(request);

        await _checklistStore.CreateChecklist(checklist);

        return CreatedAtAction("GetChecklistById", new { id = checklist.Id }, checklist);
        
    }

    [HttpGet("checklist/{id}")]
    public async Task<ActionResult<Checklist>> GetChecklistById(int id)
    {
        var checklist = await _checklistStore.GetChecklistById(id);

        if (checklist == null)
        {
            return NotFound();
        }
        return checklist;
    }


    [HttpGet("checklists")]
    public async Task<ActionResult<IEnumerable<Checklist>>> GetChecklist(int id)
    {
        var checklists = await _checklistStore.GetChecklist();

        if (checklists == null)
        {
            return NotFound();
        }

        return Ok(checklists);
    }


    [HttpPatch("update")]

    public async Task<ActionResult<Checklist>> UpdateChecklist([FromBody] ChecklistRequest checklistRequest)
    {
        var checklist = await _checklistStore.GetChecklistById(checklistRequest.Id);

        if (checklist == null)
        {
            return NotFound();
        }

        checklist.UpdateChecklist(checklistRequest);

        await _checklistStore.UpdateChecklist(checklist);
        return Ok(checklist);

    }

    [HttpDelete]
    [Route("delete/{id}")]
    public async Task DeleteChecklist(int id)
    {
       await _checklistStore.DeleteChecklist(id);
    }

}