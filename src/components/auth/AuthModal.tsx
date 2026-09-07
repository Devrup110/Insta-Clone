import { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const { login, signup } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, username, fullName);
      }
      onClose();
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full h-full flex">
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
          <div className="relative">
            <div className="absolute -top-8 -left-16 bg-white rounded-3xl p-4 shadow-xl transform -rotate-12">
              <span className="text-2xl">🔥</span>
              <span className="text-2xl ml-2">👀</span>
              <span className="text-2xl ml-2">❤️</span>
            </div>

            <div className="absolute -top-4 -right-16 bg-green-500 rounded-full p-4 shadow-xl">
              <span className="text-white text-2xl">⭐✓</span>
            </div>

            <div className="absolute -bottom-8 -left-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center shadow-xl">
              <span className="text-white text-3xl">❤️</span>
            </div>

            <div className="absolute -bottom-4 -right-12 border-4 border-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full w-24 h-24 overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 w-80">
              <img
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Main"
                className="w-full h-96 object-cover"
              />
              <div className="bg-gray-900 p-4 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                </div>
                <div className="flex-1 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            <div className="absolute top-1/4 -left-20 w-24 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Story 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/3 -right-24 w-24 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Story 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <h1 className="font-instagram text-6xl text-white mb-2">Pictogram</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#262626] rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#262626] rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                    required
                  />
                </>
              )}

              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#121212] border border-[#262626] rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#121212] border border-[#262626] rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#0095f6] text-white py-2 rounded-lg font-semibold hover:bg-[#1877f2] transition-colors"
              >
                {isLogin ? 'Log in' : 'Sign up'}
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-[#262626]"></div>
              <span className="px-4 text-gray-500 font-semibold text-sm">OR</span>
              <div className="flex-1 border-t border-[#262626]"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-[#0095f6] font-semibold py-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Log in with Facebook
            </button>

            {isLogin && (
              <div className="text-center mt-4">
                <a href="#" className="text-xs text-gray-500 hover:text-white">
                  Forgot password?
                </a>
              </div>
            )}

            <div className="text-center mt-8">
              <span className="text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#0095f6] font-semibold hover:text-white"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
