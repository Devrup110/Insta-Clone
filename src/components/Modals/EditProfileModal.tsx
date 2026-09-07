import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { User } from '../../Types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onUpdateProfile: (updatedUser: User) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdateProfile,
}) => {
  const { setCurrentUser } = useAuth();
  const [fullName, setFullName] = useState(user.fullName || '');
  const [username, setUsername] = useState(user.username || '');
  const [bio, setBio] = useState(user.bio || '');
  const [profilePic, setProfilePic] = useState(user.avatar || '');

  useEffect(() => {
    if (isOpen) {
      setFullName(user.fullName || '');
      setUsername(user.username || '');
      setBio(user.bio || '');
      setProfilePic(user.avatar || '');
    }
  }, [isOpen, user]);

  const handleSave = () => {
    const updatedUser: User = {
      ...user,
      fullName,
      username,
      bio,
      avatar: profilePic,
    };
    setCurrentUser(updatedUser);
    onUpdateProfile(updatedUser);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-200 dark:border-dark-border">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-text">Edit Profile</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-dark-text-secondary">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-dark-bg dark:border-dark-border dark:text-dark-text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-dark-text-secondary">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-dark-bg dark:border-dark-border dark:text-dark-text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-dark-text-secondary">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-dark-bg dark:border-dark-border dark:text-dark-text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-dark-text-secondary">Profile Picture URL</label>
            <input
              type="text"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-dark-bg dark:border-dark-border dark:text-dark-text"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-dark-text rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;