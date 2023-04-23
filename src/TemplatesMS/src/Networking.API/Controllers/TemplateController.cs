using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TemplateController : ControllerBase
    {
        private readonly ITemplateStore _templateStore;

        public TemplateController(ITemplateStore templateStore)
        {
            _templateStore = templateStore;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTemplate([FromBody] CreateTemplateRequest createTemplateRequest)
        {
            var template = new Template(createTemplateRequest);
            await _templateStore.CreateTemplate(template);

            return CreatedAtAction("GetTemplateById", new { id = template.Id }, template);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTemplateById(int id)
        {
            var template = await _templateStore.GetTemplateById(id);

            if (template == null)
            {
                return NotFound();
            }

            return Ok(template);
        }

        [HttpDelete("template/{id}")]
        public async Task<IActionResult> DeleteTemplate(int id)
        {
            await _templateStore.DeleteTemplate(id);
            return Ok();
        }
        [HttpPut("template/{id}")]
        public async Task<IActionResult> UpdateTemplate(int id, [FromBody] UpdateTemplateRequest request)
        {
            var template = await _templateStore.GetTemplateById(id);

            if (template == null)
            {
                return NotFound();
            }

            template.Title = request.Title;
            template.Body = request.Body;

            if (request.Widgets != null)
            {
                if (template.Widgets == null)
                {
                    template.Widgets = new List<Widget>();
                }

                foreach (var widget in request.Widgets)
                {
                    var existingWidget = template.Widgets.FirstOrDefault(w => w.Id == widget.Id);
                    if (existingWidget != null)
                    {
                        existingWidget.Type = widget.Type;
                    }
                    else
                    {
                        template.Widgets.Add(widget);
                    }
                }
            }

            await _templateStore.UpdateTemplate(id, request);

            return Ok(template);
        }

    



    [HttpGet("user/{userId}")]
            public async Task<IActionResult> GetTemplatesByUserId(int userId)
            {
                var templates = await _templateStore.GetTemplatesByUserId(userId);

                if (templates == null || templates.Count == 0)
                {
                    return NotFound();
                }

                return Ok(templates);
            }
        
    }
}
