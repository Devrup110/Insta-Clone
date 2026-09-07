import { Highlight } from '../../Types';

interface HighlightsTrayProps {
  highlights: Highlight[];
  onHighlightClick: (highlightIndex: number) => void;
  isOwnProfile: boolean;
}

const HighlightsTray = ({
  highlights,
  onHighlightClick,
  isOwnProfile,
}: HighlightsTrayProps) => {
  return (
    <div className="mb-12 overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 pb-4">
        {highlights.map((highlight, index) => (
          <button
            key={highlight.id}
            onClick={() => onHighlightClick(index)}
            className="flex flex-col items-center gap-2 flex-shrink-0"
          >
            <div className="w-20 h-20 rounded-full bg-[#262626] p-0.5 ring-2 ring-pink-500/50 transition-transform hover:animate-spin-slow">
              <img
                src={highlight.coverImage}
                alt={highlight.title}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-white">{highlight.title}</span>
          </button>
        ))}
        {isOwnProfile && (
          <button className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center">
              <span className="text-4xl text-gray-400">+</span>
            </div>
            <span className="text-xs text-white">New</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default HighlightsTray;