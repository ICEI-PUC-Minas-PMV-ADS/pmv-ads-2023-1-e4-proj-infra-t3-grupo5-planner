using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities;

public class Notes : ITrackable
{
    public int Id { get; private set; }
    public int UserId { get; private set; } 
    public string Note { get; private set; } 
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public DateTime? DeletedOn { get; private set; }

    // Tech debt: wee need an empty constructor for EF.
    private Notes() {}

    public Notes(CreateNotesRequest request)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));
        if (request.UserId <= 0) throw new ArgumentException("UserId deve ser maior que zero", nameof(request));
        if (string.IsNullOrWhiteSpace(request.Note)) throw new ArgumentException("Name cannot be null or empty", nameof(request));

        UserId = request.UserId;
        Note = request.Note;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateNote(NotesDto request)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));
        if (string.IsNullOrWhiteSpace(request.Note)) throw new ArgumentException("Name cannot be null or empty", nameof(request));

        Note = request.Note;
        UpdatedOn = DateTime.UtcNow;
    }
}