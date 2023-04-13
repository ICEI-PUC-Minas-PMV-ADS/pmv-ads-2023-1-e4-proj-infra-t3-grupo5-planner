using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Entities.Enums;
using Core.Requests;

namespace Core.Entities;

public class Mood : ITrackable
{
    public int Id { get; private set; }
    public CurrentMood CurrentMood { get; private set; }    
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; private set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; private set; }
    public DateTime? DeletedOn { get; private set; }

    // Tech debt: wee need an empty constructor for EF.
    private Mood() {}

    public Mood(CreateMoodRequest request)
    {
        CurrentMood = request.CurrentMood;  
    }
}