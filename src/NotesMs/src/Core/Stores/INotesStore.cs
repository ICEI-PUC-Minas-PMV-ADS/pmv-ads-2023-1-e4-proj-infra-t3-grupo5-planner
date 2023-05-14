using Core.Entities;
using Core.Requests;

namespace Core.Stores;

public interface INotesStore
{
    public Task CreateNote(Notes note);
    public Task<Notes> UpdateNote(int noteId, NotesDto note);
    public Task<IEnumerable<Notes>> GetNotesByUserId(int userId);
    public Task<Notes> GetNotesByNotesId(int notesId);
    public Task DeleteNote(int noteId);

    /*
    public Task<Mood> CreateMood(Mood mood);
    public Task<IEnumerable<Mood>> GetMood();
    public Task<Mood?> GetMoodById(int id);
    public Task Update(Mood mood);
    public Task Delete(int id);
    */
}