import { useState } from 'react';
import { X, ChevronRight, Lock, Bell, Eye, User, Shield, HelpCircle, Info } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const [activeTab, setActiveTab] = useState<'main' | 'account' | 'privacy' | 'notifications'>('main');

  if (!isOpen) return null;

  const mainSettings = [
    { icon: User, label: 'Edit profile', onClick: () => {} },
    { icon: Bell, label: 'Notifications', onClick: () => setActiveTab('notifications') },
    { icon: Eye, label: 'Privacy', onClick: () => setActiveTab('privacy') },
    { icon: Shield, label: 'Security', onClick: () => {} },
    { icon: Lock, label: 'Account privacy', onClick: () => setActiveTab('account') },
    { icon: HelpCircle, label: 'Help', onClick: () => {} },
    { icon: Info, label: 'About', onClick: () => {} },
  ];

  const accountSettings = [
    { label: 'Personal information', description: 'Provide personal details' },
    { label: 'Password', description: 'Change your password' },
    { label: 'Account privacy', description: 'Private account' },
    { label: 'Data download', description: 'Request download' },
    { label: 'Delete account', description: 'Permanently delete account' },
  ];

  const privacySettings = [
    { label: 'Account privacy', description: 'Private account', toggle: true },
    { label: 'Activity status', description: 'Show activity status', toggle: true },
    { label: 'Story sharing', description: 'Allow sharing', toggle: true },
    { label: 'Comments', description: 'Control who can comment' },
    { label: 'Tags', description: 'Control who can tag you' },
    { label: 'Mentions', description: 'Control who can mention you' },
  ];

  const notificationSettings = [
    { label: 'Likes', description: 'From everyone', toggle: true },
    { label: 'Comments', description: 'From everyone', toggle: true },
    { label: 'Messages', description: 'From everyone', toggle: true },
    { label: 'New followers', description: 'From everyone', toggle: true },
    { label: 'Stories', description: 'From people you follow', toggle: true },
    { label: 'Live videos', description: 'From people you follow', toggle: true },
  ];

  const renderSettings = () => {
    switch (activeTab) {
      case 'notifications':
        return (
          <div>
            <button
              onClick={() => setActiveTab('main')}
              className="mb-6 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            >
              ← Back
            </button>
            <h3 className="text-xl font-semibold text-black dark:text-dark-text mb-6">Notification Settings</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Control how you receive notifications.</p>
            {notificationSettings.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors rounded-lg"
              >
                <div className="text-left">
                  <div className="text-black dark:text-dark-text font-medium">{item.label}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:peer-checked:bg-blue-400"></div>
                </label>
              </div>
            ))}
          </div>
        );
      case 'privacy':
        return (
          <div>
            <button
              onClick={() => setActiveTab('main')}
              className="mb-6 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            >
              ← Back
            </button>
            <h3 className="text-xl font-semibold text-black dark:text-dark-text mb-6">Privacy Settings</h3>
            {privacySettings.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors rounded-lg"
              >
                <div className="text-left">
                  <div className="text-black dark:text-dark-text font-medium">{item.label}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</div>
                </div>
                {item.toggle ? (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:peer-checked:bg-blue-400"></div>
                  </label>
                ) : (
                  <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
                )}
              </div>
            ))}
          </div>
        );
      case 'account':
        return (
          <div>
            <button
              onClick={() => setActiveTab('main')}
              className="mb-6 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            >
              ← Back
            </button>
            <h3 className="text-xl font-semibold text-black dark:text-dark-text mb-6">Account Settings</h3>
            {accountSettings.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors rounded-lg"
              >
                <div className="text-left">
                  <div className="text-black dark:text-dark-text font-medium">{item.label}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</div>
                </div>
                <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            ))}
          </div>
        );
      default:
        return (
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-dark-text mb-6">Settings</h3>
            {mainSettings.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} className="text-black dark:text-dark-text" />
                  <span className="text-black dark:text-dark-text font-medium">{item.label}</span>
                </div>
                <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-secondary rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-border">
          <h2 className="text-xl font-semibold text-black dark:text-dark-text">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {renderSettings()}
        </div>
      </div>
    </div>
  );
};
