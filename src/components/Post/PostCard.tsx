import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, BarChart } from 'lucide-react';
import { Post } from '../../Types';
import { useAuth } from '../../Contexts/AuthContext';
import { PostAnalytics } from './PostAnalytics';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

export const PostCard = ({ post, onLike, onComment }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showAnalytics, setShowAnalytics] = useState(false);
  const { currentUser } = useAuth();
  
  // Track post view
  useEffect(() => {
    // In a real app, this would call an API to track the view
    console.log(`Post ${post.id} viewed by ${currentUser?.username}`);
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      // Add user info from currentUser to the comment
      console.log(`Comment by ${currentUser?.username}: ${commentText}`);
      setCommentText('');
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  return (
    <article className="bg-black border border-[#262626] rounded-lg mb-6">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-sm text-white">{post.user.username}</span>
          <span className="text-gray-400 text-sm">• 15h</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowAnalytics(true)}
            className="text-white hover:text-gray-400"
          >
            <BarChart size={20} />
          </button>
          <button className="text-white hover:text-gray-400">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full aspect-square object-cover"
      />

      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLike(post.id)}
              className="hover:opacity-60 transition-opacity"
            >
              <Heart
                size={24}
                className={post.isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
              />
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="hover:opacity-60 transition-opacity"
            >
              <MessageCircle size={24} className="text-white" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <Send size={24} className="text-white" />
            </button>
          </div>
          <button className="hover:opacity-60 transition-opacity">
            <Bookmark size={24} className="text-white" />
          </button>
        </div>

        <div className="font-semibold text-sm mb-2 text-white">
          {post.likes.toLocaleString()} likes
        </div>

        {post.caption && (
          <div className="text-sm mb-2">
            <span className="font-semibold mr-2 text-white">{post.user.username}</span>
            <span className="text-white">{post.caption}</span>
          </div>
        )}

        {post.comments.length > 0 && !showComments && (
          <button
            onClick={() => setShowComments(true)}
            className="text-sm text-gray-400 mb-2 hover:text-gray-300"
          >
            View all {post.comments.length} comments
          </button>
        )}

        {showComments && post.comments.length > 0 && (
          <div className="space-y-2 mb-2">
            {post.comments.map((comment) => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold mr-2 text-white">{comment.user.username}</span>
                <span className="text-white">{comment.content}</span>
              </div>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-500 uppercase mb-3">
          {formatDate(post.createdAt)}
        </div>

        <form onSubmit={handleCommentSubmit} className="flex items-center gap-2 pt-3 border-t border-[#262626]">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-1 outline-none text-sm bg-transparent text-white placeholder-gray-500"
          />
          {commentText && (
            <button
              type="submit"
              className="text-[#0095f6] font-semibold text-sm hover:text-white"
            >
              Post
            </button>
          )}
        </form>
      </div>
      
      {showAnalytics && (
        <PostAnalytics 
          isOpen={showAnalytics}
          onClose={() => setShowAnalytics(false)}
          postId={post.id}
          views={Math.floor(Math.random() * 1000) + 500}
          likes={post.likes}
          comments={post.comments.length}
          shares={Math.floor(Math.random() * 15) + 2}
          saves={Math.floor(Math.random() * 30) + 10}
          reachData={Array.from({ length: 7 }, () => Math.floor(Math.random() * 200) + 50)}
        />
      )}
    </article>
  );
};

export default PostCard;
