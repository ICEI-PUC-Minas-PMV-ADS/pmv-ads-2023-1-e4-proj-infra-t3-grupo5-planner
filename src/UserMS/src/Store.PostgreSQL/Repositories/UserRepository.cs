using Core.Entities;
using Core.Stores;

namespace Store.PostgreSQL.Repositories;

public class UserRepository : IUserStore
{
    public Task<User> GetUser()
    {
        var user = new User
        {
            Id = 1,
            FirstName = "Teste",
            LastName = "Da Silva",
            Email = "testedasilva@sauro.com",
            IsPremium = true
        };
        return Task.FromResult(user);
    }
}