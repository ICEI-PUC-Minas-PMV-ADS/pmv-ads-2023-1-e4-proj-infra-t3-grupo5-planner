using Core.Entities.Enums;

namespace Core.Entities;

public class Widget
{
    public int Id { get; private set; }
    public WidgetType Type { get; private set; }
}