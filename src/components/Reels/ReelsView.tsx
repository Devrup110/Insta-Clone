import { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Volume2, VolumeX, Music, Play } from 'lucide-react';
import { Reel } from '../../Types';
// import { reels as initialReels } from '../../Data/mockData'; // Remove this line

interface ReelsViewProps {
  reels: Reel[];
  onLike: (reelId: string) => void;
  onComment: (reelId: string, commentText: string) => void;
  onShare: (reelId: string) => void;
  onSave: (reelId: string) => void;
  currentUserId: string;
}

export const ReelsView = ({ reels, onLike, onComment, onShare, onSave }: ReelsViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);  // Default to muted
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // const [reels, setReels] = useState(initialReels); // Remove this line
  const [comment, setComment] = useState("");

  const handleLikeClick = (reelId: string) => {
    onLike(reelId);
  };

  const handleCommentClick = (reelId: string) => {
    if (comment.trim()) {
      onComment(reelId, comment);
      setComment("");
    }
  };

  const handleShareClick = (reelId: string) => {
    onShare(reelId);
  };

  const handleSaveClick = (reelId: string) => {
    onSave(reelId);
  };

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, reels.length);
  }, [reels]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.play().catch(error => console.error('Video play failed:', error));
      } else {
        currentVideo.pause();
      }
    }
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.muted = isMuted;
    }
  }, [isMuted, currentIndex]);

  const handleVideoPress = () => {
    setIsPlaying(prev => !prev);
  };

  const handleNextReel = () => {
    setCurrentIndex(prev => (prev + 1) % reels.length);
    setIsPlaying(true);
  };

  const handlePrevReel = () => {
    setCurrentIndex(prev => (prev - 1 + reels.length) % reels.length);
    setIsPlaying(true);
  };

  if (!reels.length) {
    return <div>No reels to show.</div>;
  }

  const currentReel = reels[currentIndex];

  return (
    <div className="relative h-screen bg-black flex justify-center items-center">
      <div className="relative w-full h-full max-w-md aspect-[9/16]">
        <video
          ref={el => videoRefs.current[currentIndex] = el}
          src={currentReel.videoUrl}
          loop
          onClick={handleVideoPress}
          className="w-full h-full object-cover"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <Play size={64} color="white" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex items-center mb-2">
            <img src={currentReel.user.avatar} alt={currentReel.user.username} className="w-10 h-10 rounded-full object-cover mr-3" />
            <p className="font-semibold">{currentReel.user.username}</p>
          </div>
          <p className="mb-2">{currentReel.caption}</p>
          <div className="flex items-center">
            <Music size={16} className="mr-2" />
            <p className="text-sm">{currentReel.song}</p>
          </div>
        </div>
        <div className="absolute right-2 bottom-24 flex flex-col items-center gap-4 text-white">
          <button onClick={() => handleLikeClick(currentReel.id)} className="flex flex-col items-center">
            <Heart size={32} fill={currentReel.isLiked ? 'red' : 'none'} />
            <span className="text-sm">{currentReel.likes.toLocaleString()}</span>
          </button>
          <button onClick={() => handleCommentClick(currentReel.id)} className="flex flex-col items-center">
            <MessageCircle size={32} />
            <span className="text-sm">{currentReel.comments.length.toLocaleString()}</span>
          </button>
          <button onClick={() => handleShareClick(currentReel.id)} className="flex flex-col items-center">
            <Send size={32} />
          </button>
          <button onClick={() => handleSaveClick(currentReel.id)} className="flex flex-col items-center">
            <Bookmark size={32} />
          </button>
          <button className="flex flex-col items-center">
            <MoreHorizontal size={32} />
          </button>
        </div>
        <button onClick={() => setIsMuted(!isMuted)} className="absolute top-4 right-4 text-white">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        <button onClick={handlePrevReel} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full">
          &lt;
        </button>
        <button onClick={handleNextReel} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};
