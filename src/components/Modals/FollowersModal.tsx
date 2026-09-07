import { X } from 'lucide-react';
import { User } from '../../Types';

interface FollowersModalProps {
  isOpen: boolean;
  onClose: () => void;
  followers: User[];
  followingIds: string[];
  currentUserId: string;
  onRemoveFollower: (userId: string) => void;
  onFollow: (userId: string) => void;
  onUnfollow: (userId: string) => void;
}

export const FollowersModal = ({
  isOpen,
  onClose,
  followers,
  followingIds,
  currentUserId,
  onRemoveFollower,
  onFollow,
  onUnfollow
}: FollowersModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[#262626] rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-[#363636]">
            <h2 className="text-lg font-semibold text-white">Followers</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {followers.length > 0 ? (
              followers.map((follower) => {
                const isFollowing = followingIds.includes(follower.id);

                return (
                  <div
                    key={follower.id}
                    className="flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors border-b border-[#363636]"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <img
                        src={follower.avatar}
                        alt={follower.username}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">{follower.username}</div>
                        <div className="text-gray-400 text-xs">{follower.fullName}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onRemoveFollower(follower.id)}
                        className="px-6 py-1.5 bg-[#363636] hover:bg-[#464646] text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Remove
                      </button>

                      {!isFollowing && currentUserId !== follower.id && (
                        <button
                          onClick={() => onFollow(follower.id)}
                          className="px-6 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                          Follow
                        </button>
                      )}
                      {isFollowing && currentUserId !== follower.id && (
                        <button
                          onClick={() => onUnfollow(follower.id)}
                          className="px-6 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                          Unfollow
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center py-16 text-gray-400">
                No followers yet
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
