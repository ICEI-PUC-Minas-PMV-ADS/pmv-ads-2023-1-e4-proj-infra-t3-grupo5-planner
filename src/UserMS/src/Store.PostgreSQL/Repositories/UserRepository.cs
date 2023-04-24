using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class UserRepository : IUserStore
{
    public Task<int> CreateUser(User user)
    {
        throw new NotImplementedException();
    }

    public Task<User> GetUser()
    {
        throw new NotImplementedException();
    }
}