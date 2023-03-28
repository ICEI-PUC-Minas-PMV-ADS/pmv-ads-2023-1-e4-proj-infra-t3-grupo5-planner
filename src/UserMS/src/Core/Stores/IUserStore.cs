using Core.Entities;

namespace Core.Stores;

public interface IUserStore
{
    public Task<User> GetUser();
}