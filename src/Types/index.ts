export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  bio?: string;
  profilePic?: string; // Add this line
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  content: string;
  createdAt: Date;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
  isViewed: boolean;
}

export interface Highlight {
  id: string;
  title: string;
  coverImage: string;
  stories: Story[];
}

export interface Message {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: Date;
  unread: boolean;
}

export interface Notification {
  id: string;
  user: User;
  type: 'like' | 'comment' | 'follow' | 'mention';
  content: string;
  timestamp: Date;
  postImage?: string;
  isRead: boolean;
}

export interface Reel {
  id: string;
  userId: string;
  user: User;
  videoUrl: string;
  thumbnailUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  views: number;
  isLiked: boolean;
  song: string;
  createdAt: Date;
}
