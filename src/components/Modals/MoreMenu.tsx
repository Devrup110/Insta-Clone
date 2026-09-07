import { Settings, Activity, Bookmark, Moon, AlertCircle, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../Contexts/AuthContext';

interface MoreMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings: () => void;
}

export const MoreMenu = ({ isOpen, onClose, onOpenSettings }: MoreMenuProps) => {
  const { logout } = useAuth();

  if (!isOpen) return null;

  const menuItems = [
    { icon: Settings, label: 'Settings', onClick: onOpenSettings },
    { icon: Activity, label: 'Your activity', onClick: () => {} },
    { icon: Bookmark, label: 'Saved', onClick: () => {} },
    { icon: Moon, label: 'Switch appearance', onClick: () => {} },
    { icon: AlertCircle, label: 'Report a problem', onClick: () => {} },
    { icon: HelpCircle, label: 'Help', onClick: () => {} },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div className="fixed left-[72px] bottom-16 w-[266px] bg-white dark:bg-dark-secondary rounded-2xl shadow-2xl z-50 py-2 border border-gray-200 dark:border-dark-border">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.onClick();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors text-black dark:text-dark-text"
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <div className="border-t border-gray-200 dark:border-dark-border my-2" />

        <button
          onClick={() => {
            logout();
            onClose();
          }}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors text-black dark:text-dark-text"
        >
          <LogOut size={20} />
          <span className="text-sm">Log out</span>
        </button>
      </div>
    </>
  );
};
