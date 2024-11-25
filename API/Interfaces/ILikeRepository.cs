using API.DTOs;
using API.Helpers;

namespace API;

public interface ILikeRepository
{
    Task<UserLike?> GetUserLike(int sourceUserId, int targetUserId);

    Task<PagedList<MemberDto>> GetUserLikes(LikesParams likesParams);

    Task<IEnumerable<int>> GetCurrentUserLikedIds(int currentUserId);

    void DeleteLike(UserLike like);

    void AddLike(UserLike like);

    Task<bool> SaveChanges();
}
