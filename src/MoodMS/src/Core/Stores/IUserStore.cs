using Core.Entities;

namespace Core.Stores;

public interface IUserStore
{
    public Task<int> CreateUser(User user);
    public Task<User> GetUser();
}