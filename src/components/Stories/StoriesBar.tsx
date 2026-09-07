import { Story } from '../../Types';

interface StoriesBarProps {
  stories: Story[];
  onStoryClick: (index: number) => void;
}

export const StoriesBar = ({ stories, onStoryClick }: StoriesBarProps) => {
  return (
    <div className="bg-black border border-[#262626] rounded-lg p-4 mb-6 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(index)}
            className="flex flex-col items-center gap-1 flex-shrink-0 group"
          >
            <div
              className={`w-16 h-16 rounded-full p-0.5 ${
                story.isViewed
                  ? 'bg-gray-600'
                  : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500'
              }`}
            >
              <div className="w-full h-full rounded-full bg-black p-0.5">
                <img
                  src={story.user.avatar}
                  alt={story.user.username}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-gray-300 max-w-[70px] truncate">
              {story.user.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
