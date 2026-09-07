import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../Types';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string, fullName: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>; // Add this line
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (_email: string, _password: string) => {
  
    const mockUser: User = {
      id: '1',
      username: 'demo_user',
      fullName: 'Demo User',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Photography enthusiast 📸',
      profilePic: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150' // Add this line
    };
    setCurrentUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('currentUser', JSON.stringify(mockUser));
  };

  const signup = async (_email: string, _password: string, username: string, fullName: string) => {
    // In a real app, we would use email and password for user registration
    // console.log(`Registering with email: ${email} and password: ${password}`);
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username,
      fullName,
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: '',
      profilePic: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150' // Add this line
    };
    setCurrentUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('currentUser', JSON.stringify(mockUser));
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, isAuthenticated, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
