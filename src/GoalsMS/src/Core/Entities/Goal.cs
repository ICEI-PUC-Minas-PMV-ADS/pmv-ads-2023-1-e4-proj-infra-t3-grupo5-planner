using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using Core.Entities.Interfaces;
using Core.Requests;

namespace Core.Entities
{
    public class Goal : ITrackable
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Icon { get; set; }
        public string Title { get; set; }
        public int Target { get; set; }
        public int Progress { get; set; }
        public DateTime? ReachedAt { get; set; }
        public DateTime? UpdatedOn { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime? CreatedOn { get; private set; }
        
        
        


        // Tech debt: wee need an empty constructor for EF.
        private Goal() { }

        public Goal(CreateGoalRequest request)
        {
            UserId = request.UserId;
            Icon = request.Icon;
            Title = request.Title;
            Target = request.Target;
            Progress = request.Progress;
            CreatedOn = DateTime.UtcNow;
            UpdatedOn = DateTime.UtcNow;
        }

        public void Update(UpdateGoalRequest request)
        {
            if (request.Icon != null)
            {
                Icon = request.Icon;
            }

            if (request.Title != null)
            {
                Title = request.Title;
            }

            if (request.Target != null)
            {
                Target = request.Target;
            }

            if (request.Progress != null)
            {
                Progress = request.Progress;                
                if (Progress >= Target && !ReachedAt.HasValue)
                {
                    ReachedAt = DateTime.UtcNow;
                }
            }
            UpdatedOn = DateTime.UtcNow;
        }

        public void UpdateGoal(DateTime? updatedOn)
        {
            UpdatedOn = updatedOn;
        }
    }
}
