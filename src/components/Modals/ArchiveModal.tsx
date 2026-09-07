import React from 'react';

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

const ArchiveModal: React.FC<ArchiveModalProps> = ({ isOpen, onClose, userId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-dark-text">Archive</h2>
        <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
          This is where archived posts or stories for user {userId} would be displayed.
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ArchiveModal;