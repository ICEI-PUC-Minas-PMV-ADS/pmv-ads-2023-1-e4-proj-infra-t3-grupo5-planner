using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities.Interfaces;

public interface ITrackable
{
<<<<<<< HEAD:src/GoalsMS/src/Core/Entities/Interfaces/ITrackable.cs
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime? CreatedOn { get; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? UpdatedOn { get; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? ReachedAt { get; }
=======
    public DateTime CreatedOn { get; }
    public DateTime UpdatedOn { get; }
>>>>>>> 8fc218c966aa13788ef039b30dea53fe3f62a478:src/UserMS/src/Core/Entities/Interfaces/ITrackable.cs
}