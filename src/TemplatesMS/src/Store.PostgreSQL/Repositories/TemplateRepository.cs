using Core.Entities;
using Core.Entities.Interfaces;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;
using Core.Requests;
using System.Collections.Generic;
using System;

namespace Store.PostgreSQL.Repositories
{
    public class TemplateRepository : ITemplateStore
    {
        private readonly Context _context;

        public TemplateRepository(Context context)
        {
            _context = context;
        }

        public async Task<Template> CreateTemplate(Template template)
        {            
            {
            _context.Templates.Add(template);
            await _context.SaveChangesAsync();
            return template;
        }
        }

        public async Task<Template> GetTemplateById(int id)
        {
            return await _context.Templates.FindAsync(id);
        }

        public async Task DeleteTemplate(int id)
        {
            var template = await _context.Templates.FindAsync(id);

            if (template != null)
            {
                _context.Templates.Remove(template);
                await _context.SaveChangesAsync();
            }
        }

             public async Task<Template> UpdateTemplate(int id, UpdateTemplateRequest request)
        {
            var template = await _context.Templates.FindAsync(id);

            if (template == null)
            {
                throw new ArgumentNullException(nameof(template));
            }

            template.Title = request.Title;
            template.Body = request.Body;

            if (request.Widgets != null)            {
                
                template.Widgets.RemoveAll(w => !request.Widgets.Any(rw => rw.Id == w.Id));

               
                foreach (var widget in request.Widgets)
                {
                    var existingWidget = template.Widgets.FirstOrDefault(w => w.Id == widget.Id);
                    if (existingWidget != null)
                    {
                        existingWidget.Type = widget.Type;
                    }
                    else
                    {
                        template.Widgets.Add(new Widget
                        {
                            Id = widget.Id,
                            Type = widget.Type
                        });
                    }
                }
            }

            template.UpdatedOn = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return template;
        }


        public async Task<List<Template>> GetTemplatesByUserId(int userId)
        {
            return await _context.Templates.Where(t => t.UserId == userId).ToListAsync();
        }
    }
}