import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { User, Post } from '../../Types';

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  posts: Post[];
}

export const SearchPanel = ({ isOpen, onClose, users, posts }: SearchPanelProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const userResults = users.filter(
        user =>
          user.username.toLowerCase().includes(query.toLowerCase()) ||
          user.fullName.toLowerCase().includes(query.toLowerCase())
      );
      
      // Also search in posts (example usage)
      const postResults = posts.filter(post => 
        post.caption?.toLowerCase().includes(query.toLowerCase())
      );
      console.log(`Found ${postResults.length} matching posts`);
      
      setSearchResults(userResults);
    } else {
      setSearchResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed left-[245px] top-0 h-full w-[400px] bg-black border-r border-[#262626] z-30 flex flex-col">
      <div className="p-6 border-b border-[#262626]">
        <h2 className="text-2xl font-semibold text-white mb-6">Search</h2>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#262626] rounded-lg text-white placeholder-gray-500 focus:outline-none"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-3 top-3 text-gray-500 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {searchQuery ? (
          searchResults.length > 0 ? (
            <div>
              {searchResults.map(user => (
                <button
                  key={user.id}
                  className="w-full flex items-center gap-3 px-6 py-3 hover:bg-[#1a1a1a] transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-sm">{user.username}</div>
                    <div className="text-gray-400 text-sm">{user.fullName}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              No results found
            </div>
          )
        ) : (
          <div className="px-6 py-4">
            <div className="text-white font-semibold mb-4">Recent</div>
            {users.slice(0, 5).map(user => (
              <button
                key={user.id}
                className="w-full flex items-center justify-between gap-3 py-2 hover:opacity-80"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{user.username}</div>
                    <div className="text-gray-400 text-sm">{user.fullName}</div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <X size={16} />
                </button>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
