import React from 'react';
import { User } from '../../Types';

interface FollowListModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  title: string;
}

const FollowListModal: React.FC<FollowListModalProps> = ({ isOpen, onClose, users, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-dark-text">{title}</h2>
        <div className="max-h-80 overflow-y-auto">
          {users.length === 0 ? (
            <p className="text-gray-600 dark:text-dark-text-secondary">No {title.toLowerCase()} yet.</p>
          ) : (
            users.map(user => (
              <div key={user.id} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-dark-border last:border-b-0">
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full object-cover mr-3" />
                  <span className="font-medium text-gray-800 dark:text-dark-text">{user.username}</span>
                </div>
                {/* Add follow/unfollow button logic here if needed */}
              </div>
            ))
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FollowListModal;