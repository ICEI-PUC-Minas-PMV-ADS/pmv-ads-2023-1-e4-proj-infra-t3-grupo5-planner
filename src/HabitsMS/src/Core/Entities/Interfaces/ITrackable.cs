using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities.Interfaces;

public interface ITrackable
{
    public DateTime CreatedOn { get; }
    public DateTime UpdatedOn { get; }
}