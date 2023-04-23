using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities
{
    public class Widget
    {
        public int Id { get; set; }
        public WidgetType Type { get; set; }
        public int TemplateId { get; set; }

        public Widget() { }

    }


    public enum WidgetType
    {
        Checklist = 0,
        Expenses = 1,
        Goals = 2,
        Habits = 3,
        Mood = 4,
        Reminder = 5
    }
}