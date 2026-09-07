import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './Contexts/AuthContext.tsx';
import { AuthModal } from './components/auth/AuthModal.tsx';
import { Sidebar } from './components/Layout/SideBar.tsx';
import { SuggestedUsers } from './components/Layout/SuggestedUser.tsx';
import { SearchPanel } from './components/Panels/SearchPanel.tsx';
import { MessagesPanel } from './components/Panels/MessagesPanel.tsx';
import { NotificationsPanel } from './components/Panels/NotificationPanel.tsx';
import { Feed } from './components/Feed/Feed.tsx';
import { ProfileView } from './components/Profile/ProfileView.tsx';
import { ExploreView } from './components/Explore/ExploreView.tsx';
import { ReelsView } from './components/Reels/ReelsView.tsx';
import { CreatePostModal } from './components/Post/CreatePostModal.tsx';
import { StoryViewer } from './components/Stories/StoryViewer.tsx';
import { CreateStoryModal } from './components/Stories/CreateStoryModal.tsx';
import { MoreMenu } from './components/Modals/MoreMenu.tsx';
import { SettingsModal } from './components/Modals/SettingsModal.tsx';
import { FollowersModal } from './components/Modals/FollowersModal.tsx';
import { FollowingModal } from './components/Modals/FollowingModal.tsx';
import LoadingSpinner from './components/Layout/LoadingSpinner.tsx';
import { mockPosts, mockStories, mockUsers, mockHighlights, mockMessages, mockNotifications, mockReels } from './Data/mockData.ts';
import { Post, Comment, Story, Reel } from './Types/index.ts';
import ErrorComponent from './components/ErrorComponent.tsx';

function AppContent() { 
  const { isAuthenticated, currentUser } = useAuth();
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showStoryViewer, setShowStoryViewer] = useState(false);
  const [showCreateStory, setShowCreateStory] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [currentStories, setCurrentStories] = useState<Story[]>([]);
  const [currentView, setCurrentView] = useState<'home' | 'explore' | 'profile' | 'search' | 'messages' | 'notifications' | 'reels'>('home');
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [reels, setReels] = useState<Reel[]>(mockReels);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 1.5 second loading time
    return () => clearTimeout(timer);
  }, []);

  const handleReelLike = (reelId: string) => {
    setReels(prevReels =>
      prevReels.map(reel =>
        reel.id === reelId ? { ...reel, likes: reel.likes + 1, isLiked: true } : reel
      )
    );
  };

  const handleReelComment = (reelId: string, commentText: string) => {
    if (!currentUser) return;
    setReels(prevReels =>
      prevReels.map(reel =>
        reel.id === reelId
          ? { ...reel, comments: [...reel.comments, { id: Date.now().toString(), userId: currentUser.id, user: currentUser, content: commentText, createdAt: new Date() }] }
          : reel
      )
    );
  };

  const handleShare = (reelId: string) => {
    alert(`Share reel: ${reelId}`);
  };

  const handleSave = (reelId: string) => {
    alert(`Save reel: ${reelId}`);
  };

  const [followers, setFollowers] = useState<string[]>(['2', '3', '4', '5']);
  const [following, setFollowing] = useState<string[]>(['2', '3']);
  const [savedPostIds] = useState<string[]>(['1', '2', '1d']);
  const [taggedPostIds] = useState<string[]>(['3', '1b']);

  const getFollowerUsers = () => followers.map(id => mockUsers.find(u => u.id === id)).filter(Boolean) as any[];
  const getFollowingUsers = () => following.map(id => mockUsers.find(u => u.id === id)).filter(Boolean) as any[];

  const handleCreateStory = (imageUrl: string, filter: string) => {
    const newStory = {
      id: `story-${Date.now()}`,
      user: currentUser!,
      imageUrl,
      filter,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      views: 0,
      isViewed: false
    };
    
    console.log('New story created:', newStory);
  };

  const handlePostLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handlePostComment = (postId: string, content: string) => {
    if (!currentUser) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment: Comment = {
          id: `c${Date.now()}`,
          userId: currentUser.id,
          user: currentUser,
          content,
          createdAt: new Date()
        };
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));
  };

  const handleCreatePost = (imageUrl: string, caption: string) => {
    if (!currentUser) return;

    const newPost: Post = {
      id: `p${Date.now()}`,
      userId: currentUser.id,
      user: currentUser,
      imageUrl,
      caption,
      likes: 0,
      comments: [],
      isLiked: false,
      createdAt: new Date()
    };

    setPosts([newPost, ...posts]);
  };

  const handleStoryClick = (index: number) => {
    setCurrentStories(mockStories);
    setStoryIndex(index);
    setShowStoryViewer(true);
  };

  const handleHighlightClick = (highlightIndex: number) => {
    const highlight = mockHighlights[highlightIndex];
    setCurrentStories(highlight.stories);
    setStoryIndex(0);
    setShowStoryViewer(true);
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view as any);
  };

  const handleFollow = (userId: string) => {
    if (!following.includes(userId)) {
      setFollowing([...following, userId]);
    }
  };

  const handleUnfollow = (userId: string) => {
    setFollowing(following.filter(id => id !== userId));
  };

  const handleRemoveFollower = (userId: string) => {
    setFollowers(followers.filter(id => id !== userId));
  };

  const unreadMessages = mockMessages.filter(m => m.unread).length;
  const unreadNotifications = mockNotifications.filter(n => !n.isRead).length;

  const shouldShowRightSidebar = currentView === 'home';
  const shouldShowPanel = currentView === 'search' || currentView === 'messages' || currentView === 'notifications';

  if (!isAuthenticated) {
    return <AuthModal isOpen={true} onClose={() => {}} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Sidebar
        currentView={currentView}
        onViewChange={handleViewChange}
        onCreatePost={() => setShowCreatePost(true)}
        onOpenMore={() => setShowMoreMenu(true)}
        unreadMessages={unreadMessages}
        unreadNotifications={unreadNotifications}
      />

      <SearchPanel
        isOpen={currentView === 'search'}
        onClose={() => setCurrentView('home')}
        users={mockUsers}
        posts={posts}
      />

      <MessagesPanel
        isOpen={currentView === 'messages'}
        onClose={() => setCurrentView('home')}
        messages={mockMessages}
      />

      <NotificationsPanel
        isOpen={currentView === 'notifications'}
        onClose={() => setCurrentView('home')}
        notifications={mockNotifications}
      />

      {currentView === 'reels' ? (
        <ReelsView reels={reels} onLike={handleReelLike} onComment={handleReelComment} onShare={handleShare} onSave={handleSave} currentUserId={currentUser?.id || ''} />
      ) : (
        <main className={`bg-white dark:bg-dark-bg ${shouldShowPanel ? 'ml-[645px]' : 'ml-[245px]'} ${shouldShowRightSidebar ? 'mr-[380px]' : ''} pt-8 pb-8 transition-all duration-300`}>
          {currentView === 'home' && (
            <Feed
              posts={posts}
              onLike={handlePostLike}
              onComment={handlePostComment}
              onStoryClick={handleStoryClick}
            />
          )}
          {currentView === 'explore' && <ExploreView posts={posts} />}
          {currentView === 'profile' && currentUser && (
              <ProfileView
                user={currentUser!}
                posts={posts}
                highlights={mockHighlights}
                isOwnProfile={true}
                followerCount={followers.length}
                followingCount={following.length}
                followers={getFollowerUsers()}
                following={getFollowingUsers()}
                savedPostIds={savedPostIds}
                taggedPostIds={taggedPostIds}
                onHighlightClick={handleHighlightClick}
              />
          )}
        </main>
      )}

      {shouldShowRightSidebar && currentUser && <SuggestedUsers currentUser={currentUser} />}

      <CreatePostModal
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onCreatePost={handleCreatePost}
      />

      {showStoryViewer && (
        <StoryViewer
          stories={currentStories}
          initialIndex={storyIndex}
          onClose={() => setShowStoryViewer(false)}
        />
      )}

      {showCreateStory && (
        <CreateStoryModal 
          isOpen={showCreateStory} 
          onClose={() => setShowCreateStory(false)} 
          onCreateStory={handleCreateStory} 
        />
      )}

      <MoreMenu
        isOpen={showMoreMenu}
        onClose={() => setShowMoreMenu(false)}
        onOpenSettings={() => {
          setShowMoreMenu(false);
          setShowSettings(true);
        }}
      />

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      <FollowersModal
        isOpen={showFollowers}
        onClose={() => setShowFollowers(false)}
        followers={getFollowerUsers()}
        followingIds={following}
        currentUserId={currentUser?.id || ''}
        onRemoveFollower={handleRemoveFollower}
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />

      <FollowingModal
        isOpen={showFollowing}
        onClose={() => setShowFollowing(false)}
        following={getFollowingUsers()}
        onUnfollow={handleUnfollow}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
