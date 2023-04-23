using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Requests;

namespace Core.Stores
{
    public interface ITemplateStore
    {
        Task<Template> CreateTemplate(Template template);

        Task<Template> GetTemplateById(int id);

        Task<List<Template>> GetTemplatesByUserId(int userId);

        Task DeleteTemplate(int id);

        Task<Template> UpdateTemplate(int id, UpdateTemplateRequest updateTemplateRequest);
    }
}
