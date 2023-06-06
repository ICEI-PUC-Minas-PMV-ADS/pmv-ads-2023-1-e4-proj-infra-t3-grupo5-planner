using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class PageController : ControllerBase
{
    private readonly IPageStore _pageStore;

    public PageController(IPageStore pageStore)
    {
        _pageStore = pageStore;
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Page>> CreatePage([FromBody] CreatePageRequest request)
    {

            var page = new Page(request);
            await _pageStore.CreatePage(page);

            return CreatedAtAction("GetPageById", new { id = page.Id }, page);

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Page>> GetPageById(int id)
    {
        var page = await _pageStore.GetPageById(id);

        if (page == null)
        {
            return NotFound();
        }

        return page;
    }

    [HttpGet("pages")]
    public async Task<ActionResult<IEnumerable<Page>>> GetPage(int id)
    {
        var page = await _pageStore.GetPage();

        if (page == null)
        {
            return NotFound();
        }

        return Ok (page);
    }
}