using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities.Interfaces;

public interface ITrackable
{
<<<<<<< HEAD:src/TemplatesMS/src/Core/Entities/Interfaces/ITrackable.cs
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime? CreatedOn { get; }
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime? UpdatedOn { get; }
=======
    public DateTime CreatedOn { get; }
    public DateTime UpdatedOn { get; }
>>>>>>> a3cca7bbadd671b8811f2ff26e7d04999df126b6:src/UserMS/src/Core/Entities/Interfaces/ITrackable.cs
}