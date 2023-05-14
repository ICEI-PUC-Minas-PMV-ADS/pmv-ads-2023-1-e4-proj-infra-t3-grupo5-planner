using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController : ControllerBase
{
    private readonly INotesStore _notesStore;

    public NotesController(INotesStore notesStore)
    {
        _notesStore = notesStore;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult> CreateNote([FromBody] CreateNotesRequest request)
    {
        try
        {
            var note = new Notes(request);
            await _notesStore.CreateNote(note);
            return Ok("A nota foi criada com sucesso.");
        }
        catch(Exception ex)
        {
            throw new Exception("Ocorreu um erro ao acessar o banco de dados", ex);
        }
    }

    [HttpPut]
    [Route("{noteId}")]
    public async Task<Notes> UpdateNote(int noteId,[FromBody] NotesDto request)
    {
        return await _notesStore.UpdateNote(noteId, request);
    }

    [HttpGet]
    [Route("getByUserId/{userId}")]
    public async Task<IEnumerable<Notes>> GetNotesByUserId(int userId)
    {
        return await _notesStore.GetNotesByUserId(userId);
    }

    [HttpGet]
    [Route("{notesId}")]
    public async Task<Notes> GetNotesByNotesId(int notesId)
    {
        return await _notesStore.GetNotesByNotesId(notesId);
    }

    [HttpDelete]
    [Route("{noteId}")]
    public async Task<ActionResult> DeleteNote(int noteId)
    {
        try
        {
            await _notesStore.DeleteNote(noteId);
            return Ok($"A nota de id:{noteId} foi removida com sucesso.");
        }
        catch(Exception ex)
        {
            throw new Exception("Ocorreu um erro ao acessar o banco de dados", ex);
        }
    }
}