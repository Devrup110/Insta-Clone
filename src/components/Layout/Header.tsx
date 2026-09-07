import { Home, Search, PlusSquare, Heart, User, Moon, Sun, HelpCircle } from 'lucide-react';
import { useAuth } from '../../Contexts/AuthContext';
import { useTheme } from '../../Contexts/ThemeContext';
import { useState } from 'react';
import HelpModal from '../Modals/HelpModal';
import { SettingsModal } from '../Modals/SettingsModal';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onCreatePost: () => void;
}

export const Header = ({ currentView, onViewChange, onCreatePost }: HeaderProps) => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border flex items-center justify-between h-16 px-4 z-30">
      <h1 className="font-instagram text-3xl text-black dark:text-dark-text cursor-pointer" onClick={() => onViewChange('home')}>
        Pictogram
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => onViewChange('notifications')}
          className="hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
        >
          <Heart size={24} />
        </button>

        <button
          onClick={toggleTheme}
          className="hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <button
          onClick={() => setIsHelpModalOpen(true)}
          className="hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
        >
          <HelpCircle size={24} />
        </button>

        <div className="relative group">
          <button
            onClick={() => onViewChange('profile')}
            className="hover:scale-110 transition-transform"
          >
            {currentUser?.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.username}
                className="w-6 h-6 rounded-full object-cover ring-2 ring-transparent group-hover:ring-gray-300"
              />
            ) : (
              <User size={24} className="text-gray-600 dark:text-gray-400" />
            )}
          </button>

          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button
              onClick={() => onViewChange('profile')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
            >
              Profile
            </button>
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
            >
              Settings
            </button>
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-3xl font-instagram cursor-pointer dark:text-dark-text" onClick={() => onViewChange('home')}>
          Pictogram
        </h1>

        <nav className="flex items-center gap-6">
          <button
            onClick={() => onViewChange('home')}
            className={`hover:scale-110 transition-transform ${currentView === 'home' ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
          >
            <Home size={24} />
          </button>

          <button
            onClick={() => onViewChange('explore')}
            className={`hover:scale-110 transition-transform ${currentView === 'explore' ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
          >
            <Search size={24} />
          </button>

          <button
            onClick={onCreatePost}
            className="hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
          >
            <PlusSquare size={24} />
          </button>

          <button
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            onClick={() => setIsHelpModalOpen(true)}
            className="hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
          >
            <HelpCircle size={24} />
          </button>

          <div className="relative group">
            <button
              onClick={() => onViewChange('profile')}
              className="hover:scale-110 transition-transform"
            >
              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.username}
                  className="w-6 h-6 rounded-full object-cover ring-2 ring-transparent group-hover:ring-gray-300"
                />
              ) : (
                <User size={24} className="text-gray-600" />
              )}
            </button>

            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button
                onClick={() => onViewChange('profile')}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg"
              >
                Profile
              </button>
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg border-t border-gray-200"
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>
      <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
      <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />
    </>
  );
};
