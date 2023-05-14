using Core.Entities.User;
using Core.Exceptions;
using Core.Requests;
using Core.Stores;
using Microsoft.EntityFrameworkCore;
using Store.PostgreSQL.Database;

namespace Store.PostgreSQL.Repositories;

public class UserRepository : IUserStore
{

    private Context _context;

    public UserRepository(Context context)
    {
        _context = context;
    }

    public async Task<User> CreateUser(CreateUserRequest createUserRequest)
    {
        var user = User.FromRequest(createUserRequest);
        var isUserEmailUnique = await IsUserEmailUnique(user.Email);
        if (!isUserEmailUnique)
        {
            throw new BadEmailException("Já existe um usuário com este e-mail.");
        }
        await _context.AddAsync(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<User> GetUser(int userId)
    {
        return await _context.Users.SingleAsync(u => u.Id == userId);
    }

    public async Task<bool> IsUserEmailUnique(Email email)
    {
        return await _context.Users.CountAsync(u => u.Email == email) == 0;
    }
}