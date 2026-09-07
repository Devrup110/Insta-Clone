import React, { useState, useRef } from 'react';
import { X, Upload, Camera, Check } from 'lucide-react';
import { useAuth } from '../../Contexts/AuthContext';

interface CreateStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateStory: (imageUrl: string, filter: string) => void;
}

const FILTERS = [
  { name: 'Normal', class: 'filter-normal' },
  { name: 'Clarendon', class: 'filter-clarendon' },
  { name: 'Gingham', class: 'filter-gingham' },
  { name: 'Moon', class: 'filter-moon' },
  { name: 'Lark', class: 'filter-lark' },
  { name: 'Reyes', class: 'filter-reyes' },
];

export const CreateStoryModal = ({ isOpen, onClose, onCreateStory }: CreateStoryModalProps) => {
  const { currentUser } = useAuth();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('filter-normal');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (selectedImage) {
      onCreateStory(selectedImage, selectedFilter);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-xl max-w-lg w-full">
        <div className="flex justify-between items-center p-4 border-b dark:border-dark-border">
          <h2 className="text-xl font-semibold dark:text-dark-text">Create New Story</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          {!selectedImage ? (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 dark:border-dark-border rounded-lg">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <Upload size={48} className="text-gray-400 mb-2" />
              <p className="text-gray-500 dark:text-gray-400 mb-4">Upload an image for your story</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Select Image
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <div className={`relative w-full h-64 rounded-lg overflow-hidden ${selectedFilter}`}>
                  <img src={selectedImage} alt="Story preview" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.name}
                    onClick={() => setSelectedFilter(filter.class)}
                    className={`p-2 rounded ${selectedFilter === filter.class ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-dark-bg'}`}
                  >
                    <div className={`w-full h-12 rounded overflow-hidden ${filter.class}`}>
                      <img src={selectedImage} alt={filter.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs mt-1 dark:text-dark-text">{filter.name}</p>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="mr-2 px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center"
                >
                  <Check size={18} className="mr-1" />
                  Share to Story
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};