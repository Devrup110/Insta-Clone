import { User } from '../../Types';

interface SuggestedUsersProps {
  currentUser: User;
}

const suggestedUsers = [
  {
    id: '101',
    username: '__Missu🥵🔥',
    fullName: '_Sassy BABY_...',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    followedBy: '__DEB😏' 
  }, 

  {
    id: '102',
    username: '__Das BABU',
    fullName: 'Ankush',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    followedBy: 'roy_kanishka07'
  },
  {
    id: '103',
    username: '_Anirban__', 
    fullName: 'Das Anirban__', 
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    followedBy: '_hey.ruborn_ + 11 ...'
  },
  {
    id: '104', 
    username: 'Knight_panther__',
    fullName: 'Deepto',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    followedBy: 'Sudarshan__'
  },
  { 
    id: '105',
    username: '_sunnshineeeeee_',
    fullName: 'Sunshine', 
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
    followedBy: 'arpan.roy__007' 
  } 
]; 

export const SuggestedUsers = ({ currentUser }: SuggestedUsersProps) => {
  return (
    <div className="fixed right-0 top-0 w-[380px] h-full pt-8 px-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <div className="text-white font-semibold text-sm">{currentUser.username}</div>
            <div className="text-gray-400 text-sm">{currentUser.fullName}</div>
          </div>
        </div>
        <button className="text-[#0095f6] text-xs font-semibold hover:text-white">Switch</button>
      </div>

      <div className="flex items-center justify-between mt-6 mb-4">
        <span className="text-gray-400 font-semibold text-sm">Suggested for you</span>
        <button className="text-white text-xs font-semibold hover:text-gray-400">See All</button>
      </div>

      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-semibold text-sm">{user.username}</div>
                <div className="text-gray-400 text-xs">Followed by {user.followedBy}</div>
              </div>
            </div>
            <button className="text-[#0095f6] text-xs font-semibold hover:text-white">Follow</button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap gap-1">
            <a href="#" className="hover:underline">About</a>
            <span>·</span>
            <a href="#" className="hover:underline">Help</a>
            <span>·</span>
            <a href="#" className="hover:underline">Press</a>
            <span>·</span>
            <a href="#" className="hover:underline">API</a>
            <span>·</span>
            <a href="#" className="hover:underline">Jobs</a>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
          </div>
          <div className="flex flex-wrap gap-1">
            <a href="#" className="hover:underline">Locations</a>
            <span>·</span>
            <a href="#" className="hover:underline">Language</a>
            <span>·</span>
            <a href="#" className="hover:underline">Meta Verified</a>
          </div>
          <div className="mt-4 text-gray-500">© 2025 PICTOGRAM FROM META</div>
        </div>
      </div>
    </div>
  );
};
