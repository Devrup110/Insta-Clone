import { CreditCard as Edit, Search } from 'lucide-react';
import { Message } from '../../Types';

interface MessagesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
}

export const MessagesPanel = ({ isOpen, onClose, messages }: MessagesPanelProps) => {
  if (!isOpen) return null;
  
  // Close button functionality
  const handleClose = () => {
    onClose();
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    return 'now';
  };

  return (
    <div className="fixed left-[245px] top-0 h-full w-[400px] bg-black border-r border-[#262626] z-30 flex flex-col">
      <div className="p-6 border-b border-[#262626]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Messages</h2>
          <button className="text-white hover:text-gray-400">
            <Edit size={24} />
          </button>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-[#262626] rounded-lg text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {messages.map(message => (
          <button
            key={message.id}
            className="w-full flex items-center gap-3 px-6 py-3 hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="relative">
              <img
                src={message.user.avatar}
                alt={message.user.username}
                className="w-14 h-14 rounded-full object-cover"
              />
              {message.unread && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0095f6] rounded-full border-2 border-black"></div>
              )}
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-semibold text-sm">{message.user.username}</div>
              <div className={`text-sm ${message.unread ? 'text-white font-semibold' : 'text-gray-400'}`}>
                {message.lastMessage.length > 30
                  ? message.lastMessage.substring(0, 30) + '...'
                  : message.lastMessage}
                <span className="text-gray-500"> · {formatTime(message.timestamp)}</span>
              </div>
            </div>
            {message.unread && (
              <div className="w-2 h-2 bg-[#0095f6] rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
