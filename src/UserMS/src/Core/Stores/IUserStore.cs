using Core.Entities.User;
using Core.Requests;

namespace Core.Stores;

public interface IUserStore
{
    public Task<User> CreateUser(CreateUserRequest createUserRequest);

    public Task<bool> IsUserEmailUnique(Email email);
    
    public Task<User> GetUser(int userId);
}