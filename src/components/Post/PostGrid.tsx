import React from 'react';
import { Post } from '../../Types';
import PostCard from './PostCard';

interface PostGridProps {
  posts: Post[];
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, onLike, onComment }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} onComment={onComment} />
      ))}
    </div>
  );
};

export default PostGrid;
