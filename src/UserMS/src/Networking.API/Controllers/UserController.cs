using Core.Entities;
using Core.Exceptions;
using Core.Requests;
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

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<User>> CreateUser([FromBody] CreateUserRequest request)
    {
        try
        {
            var user = new User(request);
            return await _userStore.GetUser();
        }
        catch (WeakPasswordException e)
        {
            return BadRequest(e.Message);
        }
    }
}