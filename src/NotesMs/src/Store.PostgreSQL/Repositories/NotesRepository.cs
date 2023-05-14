using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using System.Data.Common;
using System.Xml;

namespace Store.PostgreSQL.Repositories;

public class NotesRepository : INotesStore
{
    private readonly Context _context;

    public NotesRepository(Context context)
    {
        _context = context;
    }
    public async Task CreateNote(Notes note)
    {
        if(note == null)
        {
            throw new ArgumentNullException(nameof(note));
        }
        try
        {
            _context.Notes.Add(note);
            await _context.SaveChangesAsync();
        }
        catch
        {
            throw new NullReferenceException();
        }
    }

    public async Task<Notes> UpdateNote(int noteId, NotesDto note)
    {
        try
        {
            var noteToUpdate = await _context.Notes.FindAsync(noteId);
            if(noteToUpdate != null)
            {
                noteToUpdate.UpdateNote(note);
                await _context.SaveChangesAsync();
            }
            return noteToUpdate;
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao atualizar a nota", ex);
        }
    }

    public async Task<IEnumerable<Notes>> GetNotesByUserId(int userId)
    {
        try
        {
            return await _context.Notes.Where<Notes>(n => n.UserId == userId).ToListAsync();
        }
        catch (DbException ex)
        {
            throw new Exception("Ocorreu um erro ao acessar o banco de dados",ex);
        }
    }
    public async Task<Notes> GetNotesByNotesId(int notesId)
    {
        try
        {
            var note = await _context.Notes.FirstOrDefaultAsync<Notes>(n => n.Id == notesId);
            if(note == null)
            {
                throw new ArgumentException($"O id: {notesId}, não foi encontrado no banco de dados.");
            }
            else
            {
                return note;
            }
        }
        catch (DbException ex)
        {
            throw new Exception("Ocorreu um erro ao acessar o banco de dados",ex);
        }
    }
    public async Task DeleteNote(int noteId)
    {
        var note = await _context.Notes.FindAsync(noteId);
        if(note == null)
        {
            throw new ArgumentException($"A nota com id: {noteId} não foi encontrada");
        }
        try
        {
            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();
        }
        catch(Exception ex)
        {
            throw new Exception($"Não foi possível remover a nota de id: {noteId}:{ex.Message}", ex);
        }
    }
}