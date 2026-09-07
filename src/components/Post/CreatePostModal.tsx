import { useState } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../../Contexts/AuthContext';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePost: (imageUrl: string, caption: string) => void;
}

export const CreatePostModal = ({ isOpen, onClose, onCreatePost }: CreatePostModalProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const { currentUser } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      onCreatePost(imageUrl, caption);
      setImageUrl('');
      setCaption('');
      setPreviewUrl('');
      onClose();
    }
  };

  const handleImageUrlChange = (url: string) => {
    setImageUrl(url);
    setPreviewUrl(url);
  };

  const sampleImages = [
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1850617/pexels-photo-1850617.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
          <h2 className="font-semibold text-lg">Create new post</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row h-[calc(90vh-60px)]">
          <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="text-center">
                <ImageIcon size={80} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">Add a photo URL to preview</p>
              </div>
            )}
          </div>

          <div className="w-full md:w-96 p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={currentUser?.avatar}
                alt={currentUser?.username}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-sm">{currentUser?.username}</span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => handleImageUrlChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Or choose a sample:</p>
              <div className="grid grid-cols-2 gap-2">
                {sampleImages.map((url, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleImageUrlChange(url)}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors"
                  >
                    <img src={url} alt={`Sample ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              rows={4}
            />

            <button
              type="submit"
              disabled={!imageUrl.trim()}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mt-auto"
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
