using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities.Interfaces;

public interface ITrackable
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedOn { get; set; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime UpdatedOn { get; set; }
}