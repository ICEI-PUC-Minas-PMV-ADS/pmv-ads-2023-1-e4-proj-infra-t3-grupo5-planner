using Core.Entities.User;
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
            return await _userStore.CreateUser(request);
        }
        catch (Exception e)
        when (e is WeakPasswordException or BadBirthDateException or BadEmailException)
        {
            return BadRequest(e.Message);
        }
    }
}