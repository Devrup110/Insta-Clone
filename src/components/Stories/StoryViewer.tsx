import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Story } from '../../Types';

interface StoryViewerProps {
  stories: Story[];
  initialIndex: number;
  onClose: () => void;
}

export const StoryViewer = ({ stories, initialIndex, onClose }: StoryViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentStory = stories[currentIndex];
  const STORY_DURATION = 5000;

  useEffect(() => {
    if (isPaused) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / STORY_DURATION) * 100;

      if (newProgress >= 100) {
        handleNext();
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress(0);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X size={32} />
      </button>

      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {currentIndex < stories.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight size={40} />
        </button>
      )}

      <div className="relative w-full max-w-md h-full max-h-[90vh] flex flex-col">
        <div className="flex gap-1 p-2 mb-2">
          {stories.map((_, index) => (
            <div key={index} className="flex-1 h-0.5 bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{
                  width:
                    index < currentIndex
                      ? '100%'
                      : index === currentIndex
                      ? `${progress}%`
                      : '0%'
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-0.5">
              <img
                src={currentStory.user.avatar}
                alt={currentStory.user.username}
                className="w-full h-full rounded-full object-cover border-2 border-black"
              />
            </div>
            <span className="text-white font-semibold text-sm">{currentStory.user.username}</span>
            <span className="text-gray-400 text-sm">15h</span>
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-white hover:text-gray-300"
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center bg-black rounded-lg overflow-hidden">
          <img
            src={currentStory.imageUrl}
            alt="Story"
            className="max-w-full max-h-full object-contain"
            onClick={() => setIsPaused(!isPaused)}
          />
        </div>

        <div className="p-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Send message"
            className="flex-1 bg-transparent border border-gray-600 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
          />
          <button className="text-white font-semibold hover:text-gray-300">Send</button>
        </div>
      </div>
    </div>
  );
};
