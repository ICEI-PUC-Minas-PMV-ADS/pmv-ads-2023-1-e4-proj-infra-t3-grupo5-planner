using Core.Entities.Interfaces;
using Core.Entities.Enums;
using Core.Requests;
using Core.Entities.Dto;

namespace Core.Entities;

public class Mood : ITrackable
{
    public int Id { get; private set; }
    public CurrentMood CurrentMood { get; private set; }    
    public DateTime CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; }
    public DateTime? DeletedOn { get; private set; }

    // Tech debt: wee need an empty constructor for EF.
    private Mood() {}

    public Mood(CreateMoodRequest request)
    {
        CurrentMood = request.CurrentMood;
        CreatedOn = DateTime.UtcNow;
        UpdatedOn = DateTime.UtcNow;
    }

    public void UpdateMood(MoodUpdateDto moodUpdateDto)
    {
        CurrentMood = moodUpdateDto.CurrentMood;
    }

    public CurrentMood GetCurrentMood()
    {
        return CurrentMood;
    }
}