import { useState, useEffect } from 'react';
import { Post } from '../../Types';
import { PostCard } from '../Post/PostCard';
import { StoriesBar } from '../Stories/StoriesBar';
import { mockStories } from '../../Data/mockData';
import { InfiniteScroll } from './InfiniteScroll'; 

interface FeedProps { 
  posts: Post[]; 
  onLike: (postId: string) => void; 
  onComment: (postId: string, content: string) => void;
  onStoryClick: (index: number) => void; 
} 

export const Feed = ({ posts, onLike, onComment, onStoryClick }: FeedProps) => { 
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 3; 

  useEffect(() => {
    setDisplayedPosts(posts.slice(0, postsPerPage));
  }, [posts]);

  const loadMorePosts = () => {
    setLoading(true); 
    
    setTimeout(() => {
      const nextPosts = posts.slice(0, (page + 1) * postsPerPage);
      setDisplayedPosts(nextPosts);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  }; 

  return (
    <div className="max-w-2xl mx-auto px-4">
      <StoriesBar stories={mockStories} onStoryClick={onStoryClick} />

      <InfiniteScroll 
        loadMore={loadMorePosts} 
        hasMore={displayedPosts.length < posts.length}
        loading={loading} 
      > 
        <div> 
          {displayedPosts.map((post) => (
            <PostCard 
              key={post.id}
              post={post} 
              onLike={onLike}
              onComment={onComment}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
