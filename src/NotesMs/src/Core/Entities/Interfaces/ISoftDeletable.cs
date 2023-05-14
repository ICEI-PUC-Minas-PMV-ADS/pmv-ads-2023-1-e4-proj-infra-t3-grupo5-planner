namespace Core.Entities.Interfaces;

public interface ISoftDeletable
{
    public DateTime? DeletedOn { get; set; }
}