using Core.Entities;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserStore _userStore;

    public UserController(IUserStore userStore)
    {
        _userStore = userStore;
    }

    [HttpGet]
    [Route("profile")]
    public async Task<ActionResult<User>> GetUser()
    {
        return await _userStore.GetUser();
    }
}