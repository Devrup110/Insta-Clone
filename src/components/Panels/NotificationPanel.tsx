import { Notification } from '../../Types';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
}

export const NotificationsPanel = ({ isOpen, onClose, notifications }: NotificationsPanelProps) => {
  if (!isOpen) return null;
  
  // Add close handler
  const handleClose = () => {
    console.log('Closing notifications panel');
    onClose();
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    return 'now';
  };

  const unreadNotifications = notifications.filter(n => !n.isRead);
  const readNotifications = notifications.filter(n => n.isRead);

  return (
    <div className="fixed left-[245px] top-0 h-full w-[400px] bg-black border-r border-[#262626] z-30 flex flex-col">
      <div className="p-6 border-b border-[#262626]">
        <h2 className="text-2xl font-semibold text-white">Notifications</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {unreadNotifications.length > 0 && (
          <div className="mb-6">
            <div className="px-6 py-3 text-white font-semibold">New</div>
            {unreadNotifications.map(notification => (
              <button
                key={notification.id}
                className="w-full flex items-center gap-3 px-6 py-3 hover:bg-[#1a1a1a] transition-colors"
              >
                <img
                  src={notification.user.avatar}
                  alt={notification.user.username}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="flex-1 text-left">
                  <div className="text-white text-sm">
                    <span className="font-semibold">{notification.user.username}</span>
                    {' '}
                    {notification.content}
                    <span className="text-gray-400"> {formatTime(notification.timestamp)}</span>
                  </div>
                </div>
                {notification.postImage && (
                  <img
                    src={notification.postImage}
                    alt="Post"
                    className="w-11 h-11 object-cover"
                  />
                )}
                {notification.type === 'follow' && (
                  <button className="px-4 py-1.5 bg-[#0095f6] hover:bg-[#1877f2] text-white text-sm font-semibold rounded-lg">
                    Follow
                  </button>
                )}
              </button>
            ))}
          </div>
        )}

        {readNotifications.length > 0 && (
          <div>
            <div className="px-6 py-3 text-white font-semibold">Earlier</div>
            {readNotifications.map(notification => (
              <button
                key={notification.id}
                className="w-full flex items-center gap-3 px-6 py-3 hover:bg-[#1a1a1a] transition-colors"
              >
                <img
                  src={notification.user.avatar}
                  alt={notification.user.username}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="flex-1 text-left">
                  <div className="text-gray-400 text-sm">
                    <span className="font-semibold">{notification.user.username}</span>
                    {' '}
                    {notification.content}
                    <span className="text-gray-500"> {formatTime(notification.timestamp)}</span>
                  </div>
                </div>
                {notification.postImage && (
                  <img
                    src={notification.postImage}
                    alt="Post"
                    className="w-11 h-11 object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
