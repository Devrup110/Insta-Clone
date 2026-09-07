import React from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-text">Help</h2>
        <p className="text-gray-600 dark:text-dark-text-secondary">
          Welcome to the Instagram Clone! Here are a few tips to get you started:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-dark-text-secondary">
          <li>Explore the feed to see posts from other users.</li>
          <li>Click on a user's profile to see their posts and stories.</li>
          <li>Use the search bar to find users and posts.</li>
          <li>Create your own stories and share them with your friends.</li>
        </ul>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;