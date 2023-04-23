using Core.Entities.Enums;

namespace Core.Requests;

public class CreateTagsRequest
{
    public int UserId { get; set; }
    public string Name { get; set; }
       
}