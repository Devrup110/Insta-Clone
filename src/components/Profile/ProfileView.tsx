import { Bookmark, Grid3X3, UserSquare } from 'lucide-react';
import { User, Post, Highlight } from '../../Types';
import { useState } from 'react';
import EditProfileModal from '../Modals/EditProfileModal';
import AboutModal from '../Modals/AboutModal';
import HighlightsTray from './HighlightsTray';
import PostGrid from '../Post/PostGrid';
import FollowListModal from '../Modals/FollowListModal';
import ArchiveModal from '../Modals/ArchiveModal';

interface ProfileViewProps {
  user: User;
  posts: Post[];
  highlights: Highlight[];
  isOwnProfile: boolean;
  followerCount: number;
  followingCount: number;
  followers: User[];
  following: User[];
  isFollowing?: boolean;
  onFollow?: () => void;
  onUnfollow?: () => void;
  onHighlightClick: (highlightIndex: number) => void;
  savedPostIds?: string[];
  taggedPostIds?: string[];
}

export const ProfileView = ({
  user,
  posts,
  highlights,
  isOwnProfile,
  followerCount,
  followingCount,
  followers,
  following,
  isFollowing = false,
  onFollow,
  onUnfollow,
  onHighlightClick,
  savedPostIds = [],
  taggedPostIds = []
}: ProfileViewProps) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [isFollowListModalOpen, setIsFollowListModalOpen] = useState(false);
  const [followListUsers, setFollowListUsers] = useState<User[]>([]);
  const [followListTitle, setFollowListTitle] = useState('');

  const openArchiveModal = () => setIsArchiveModalOpen(true);
  const closeArchiveModal = () => setIsArchiveModalOpen(false);

  const onUpdateProfile = (updatedUser: User) => {
    // This function would typically call an API to update the user profile
    // For now, we'll just log the updated user
    console.log('Updated user:', updatedUser);
    // In a real app, you'd likely want to refresh the user data here
  };

  const handleLike = (postId: string) => {
    console.log(`Post ${postId} liked`);
    // In a real app, you would update the like status via an API call
  };

  const handleComment = (postId: string, content: string) => {
    console.log(`Comment on post ${postId}: ${content}`);
    // In a real app, you would add the comment via an API call
  };

  const userPosts = posts.filter(p => p.userId === user.id);
  const savedPosts = posts.filter(p => savedPostIds.includes(p.id));
  const taggedPosts = posts.filter(p => taggedPostIds.includes(p.id));

  return (
    <>
      <div className="p-4 bg-white dark:bg-dark-bg min-h-screen text-gray-800 dark:text-dark-text animate-fade-in">
        <header className="flex items-start justify-between mb-6">
          <div className="flex-shrink-0 mr-8 mt-3">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-gray-700"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h2 className="text-2xl font-bold text-white mr-4">{user.username} ○</h2>
              {isOwnProfile ? (
                <div className="flex items-center">
                  <button onClick={() => setIsEditModalOpen(true)} className="px-4 py-1 bg-[#363636] text-white rounded-md text-sm font-semibold hover:bg-[#262626]">
                    Edit Profile
                  </button>
                  <button onClick={openArchiveModal} className="ml-2 px-4 py-1 bg-[#363636] text-white rounded-md text-sm font-semibold hover:bg-[#262626]">
                    View Archive
                  </button>
                </div>
              ) : (
                <button
                  onClick={isFollowing ? onUnfollow : onFollow}
                  className={`px-6 py-1.5 rounded-lg font-semibold text-sm transition-colors ${
                    isFollowing
                      ? 'bg-[#363636] hover:bg-[#262626] text-white'
                      : 'bg-[#0095f6] hover:bg-[#1877f2] text-white'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              )}
            </div>

            <div className="flex gap-8 mb-2 text-white">
              <div>
                <span className="font-semibold">{userPosts.length}</span> posts
              </div>
              <button
                onClick={() => {
                  setFollowListUsers(followers);
                  setFollowListTitle('Followers');
                  setIsFollowListModalOpen(true);
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <span className="font-semibold">{followerCount}</span> followers
              </button>
              <button
                onClick={() => {
                  setFollowListUsers(following);
                  setFollowListTitle('Following');
                  setIsFollowListModalOpen(true);
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <span className="font-semibold">{followingCount}</span> following
              </button>
            </div>
            
            <div>
              <div className="font-bold mb-1 text-white">{user.fullName}</div>
              {user.bio && <div className="whitespace-pre-wrap text-gray-400">{user.bio}</div>}
            </div>
          </div>
        </header>

        <section className="mb-4">
          <HighlightsTray highlights={highlights} onHighlightClick={onHighlightClick} isOwnProfile={isOwnProfile} />
        </section>

        <div className="border-t border-gray-700 my-4"></div>

        <div className="flex justify-around mb-4">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex flex-col items-center py-2 px-4 text-sm font-medium ${activeTab === 'posts' ? 'text-white border-t-2 border-white' : 'text-gray-400'}`}
          >
            <Grid3X3 size={16} /> <span className="mt-1">POSTS</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex flex-col items-center py-2 px-4 text-sm font-medium ${activeTab === 'saved' ? 'text-white border-t-2 border-white' : 'text-gray-400'}`}
          >
            <Bookmark size={16} /> <span className="mt-1">SAVED</span>
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex flex-col items-center py-2 px-4 text-sm font-medium ${activeTab === 'tagged' ? 'text-white border-t-2 border-white' : 'text-gray-400'}`}
          >
            <UserSquare size={16} /> <span className="mt-1">TAGGED</span>
          </button>
        </div>

        {activeTab === 'posts' && <PostGrid posts={userPosts} onLike={handleLike} onComment={handleComment} />}
        {activeTab === 'saved' && <PostGrid posts={savedPosts} onLike={handleLike} onComment={handleComment} />}
        {activeTab === 'tagged' && <PostGrid posts={taggedPosts} onLike={handleLike} onComment={handleComment} />}

        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={user}
          onUpdateProfile={onUpdateProfile}
        />
        <AboutModal
          isOpen={isAboutModalOpen}
          onClose={() => setIsAboutModalOpen(false)}
        />
        <FollowListModal
          isOpen={isFollowListModalOpen}
          onClose={() => setIsFollowListModalOpen(false)}
          users={followListUsers}
          title={followListTitle}
        />
        <ArchiveModal
          isOpen={isArchiveModalOpen}
          onClose={closeArchiveModal}
          userId={user.id}
        />
      </div>
    </>
  );
};
