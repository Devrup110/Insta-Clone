import { Home, Search, Compass, Video, MessageCircle, Heart, PlusSquare, Menu, User } from 'lucide-react';
import { useAuth } from '../../Contexts/AuthContext';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onCreatePost: () => void;
  onOpenMore: () => void;
  unreadMessages: number;
  unreadNotifications: number;
}

export const Sidebar = ({ currentView, onViewChange, onCreatePost, onOpenMore, unreadMessages, unreadNotifications }: SidebarProps) => {
  const { currentUser, logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-full w-[245px] bg-white dark:bg-dark-bg border-r border-gray-200 dark:border-dark-border flex flex-col z-40 px-3 py-8">
      <div className="mb-10 px-3">
        <h1 className="font-instagram text-3xl text-black dark:text-dark-text cursor-pointer" onClick={() => onViewChange('home')}>
          Pictogram
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        <button
          onClick={() => onViewChange('home')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'home' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <Home size={26} className="text-black dark:text-dark-text" />
          <span className={`text-black dark:text-dark-text ${currentView === 'home' ? 'font-bold' : ''}`}>Home</span>
        </button>

        <button
          onClick={() => onViewChange('search')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'search' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <Search size={26} className="text-black dark:text-dark-text" />
          <span className={`text-black dark:text-dark-text ${currentView === 'search' ? 'font-bold' : ''}`}>Search</span>
        </button>

        <button
          onClick={() => onViewChange('explore')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'explore' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <Compass size={26} className="text-black dark:text-dark-text" />
          <span className={`text-black dark:text-dark-text ${currentView === 'explore' ? 'font-bold' : ''}`}>Explore</span>
        </button>

        <button
          onClick={() => onViewChange('reels')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'reels' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <Video size={26} className="text-black dark:text-dark-text" />
          <span className={`text-black dark:text-dark-text ${currentView === 'reels' ? 'font-bold' : ''}`}>Reels</span>
        </button>

        <button
          onClick={() => onViewChange('messages')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'messages' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <div className="relative">
            <MessageCircle size={26} className="text-black dark:text-dark-text" />
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unreadMessages}
              </span>
            )}
          </div>
          <span className={`text-black dark:text-dark-text ${currentView === 'messages' ? 'font-bold' : ''}`}>Messages</span>
        </button>

        <button
          onClick={() => onViewChange('notifications')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'notifications' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <div className="relative">
            <Heart size={26} className="text-black dark:text-dark-text" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </div>
          <span className={`text-black dark:text-dark-text ${currentView === 'notifications' ? 'font-bold' : ''}`}>Notifications</span>
        </button>

        <button
          onClick={onCreatePost}
          className="w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors"
        >
          <PlusSquare size={26} className="text-black dark:text-dark-text" />
          <span className="text-black dark:text-dark-text">Create</span>
        </button>

        <button
          onClick={() => onViewChange('profile')}
          className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
            currentView === 'profile' ? 'bg-gray-100 dark:bg-dark-secondary' : 'hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <User size={26} className="text-black dark:text-dark-text" />
          <span className={`text-black dark:text-dark-text ${currentView === 'profile' ? 'font-bold' : ''}`}>Profile</span>
        </button>
      </nav>

      <div className="mt-auto">
        <button
          onClick={onOpenMore}
          className="w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors"
        >
          <Menu size={26} className="text-black dark:text-dark-text" />
          <span className="text-black dark:text-dark-text">More</span>
        </button>
      </div>
    </aside>
  );
};
