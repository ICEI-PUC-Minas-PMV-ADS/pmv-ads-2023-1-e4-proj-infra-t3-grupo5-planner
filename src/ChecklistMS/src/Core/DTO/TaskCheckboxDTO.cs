using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    internal class TaskCheckboxDTO
    {
        public int IdChecklist { get; private set; }
        public string Name { get; private set; }
        public bool IsCompleted { get; private set; }
    }
     
}
