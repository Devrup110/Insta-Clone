import { X } from 'lucide-react';
import { User } from '../../Types';

interface FollowingModalProps {
  isOpen: boolean;
  onClose: () => void;
  following: User[];
  onUnfollow: (userId: string) => void;
}

export const FollowingModal = ({
  isOpen, 
  onClose,
  following,
  onUnfollow
}: FollowingModalProps) => {

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-dark-secondary rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col border border-gray-200 dark:border-dark-border">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-border">
            <h2 className="text-lg font-semibold text-black dark:text-dark-text">Following</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {following.length > 0 ? (
              following.map(user => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors border-b border-gray-200 dark:border-dark-border"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-black dark:text-dark-text font-semibold text-sm">{user.username}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs">{user.fullName}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onUnfollow(user.id)}
                    className="px-6 py-1.5 bg-gray-200 dark:bg-[#363636] hover:bg-gray-300 dark:hover:bg-[#464646] text-black dark:text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Following
                  </button>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center py-16 text-gray-600 dark:text-gray-400">
                Not following anyone yet
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
