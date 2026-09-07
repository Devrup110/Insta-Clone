import { User, Post, Story, Highlight, Message, Notification, Reel } from '../Types';

export const mockUsers: User[] = [ 
  { 
    id: '1', 
    username: 'D E B🔥', 
    fullName: 'debxrup_', 
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150', 
    bio: 'Car Enthusiast 🏎️\nBike Lover 🏍️\n📍Mumbai' 
  },
  { 
    id: '2', 
    username: 'Das_BABU😎', 
    fullName: 'Ankush', 
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150', 
    bio: 'Nature • Travel • Life' 
  }, 
  { 
    id: '3', 
    username: 'The_Kanishka🪝', 
    fullName: 'Kanishka',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Urban explorer | Architecture'
  }, 
  { 
    id: '4',
    username: 'Sassy(●◡●)',
    fullName: 'Misako', 
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Food blogger • Recipe creator'
  }, 
  { 
    id: '5',
    username: 'Ananya', 
    fullName: 'BOSE_',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Surf • Sea • Sand'
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    user: mockUsers[1],
    imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: false
  },
  {
    id: '2',
    user: mockUsers[2],
    imageUrl: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: false
  },
  {
    id: '3', 
    user: mockUsers[3],
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: true
  },
  {
    id: '4',
    user: mockUsers[4],
    imageUrl: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: false
  },
  {
    id: '5',
    user: mockUsers[1],
    imageUrl: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: false
  },
  {
    id: '6',
    user: mockUsers[2],
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: false
  },
  {
    id: '7',
    user: mockUsers[3],
    imageUrl: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: true
  },
  {
    id: '8',
    user: mockUsers[4],
    imageUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
    isViewed: false
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    user: mockUsers[0],
    imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Beast on wheels 🏎️💨 #supercar #luxury',
    likes: 3456,
    comments: [
      {
        id: 'c1',
        userId: '3',
        user: mockUsers[2],
        content: 'Sick ride bro! 🔥',
        createdAt: new Date('2025-10-02T10:30:00')
      },
      {
        id: 'c2',
        userId: '4',
        user: mockUsers[3],
        content: 'Dream car right there!',
        createdAt: new Date('2025-10-02T11:15:00')
      }
    ],
    isLiked: true,
    createdAt: new Date('2025-10-02T08:00:00')
  },
  {
    id: '1a',
    userId: '1',
    user: mockUsers[2],
    imageUrl: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Two wheels, endless thrills 🏍️⚡ #bikelife #speed',
    likes: 2890,
    comments: [
      {
        id: 'c1a',
        userId: '2',
        user: mockUsers[1],
        content: 'Absolutely insane! 🔥',
        createdAt: new Date('2025-10-03T10:30:00')
      }
    ],
    isLiked: true,
    createdAt: new Date('2025-10-03T08:00:00')
  },
  {
    id: '1b',
    userId: '1',
    user: mockUsers[0],
    imageUrl: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Speed demon 🏁 #racecar #performance',
    likes: 4120, // This line was missing a comma
    comments: [],
    isLiked: true,
    createdAt: new Date('2025-10-04T08:00:00')
  },
  {
    id: '1c',
    userId: '1',
    user: mockUsers[1],
    imageUrl: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Night rider 🌙🏍️ #motorcycle #nightride',
    likes: 3245,
    comments: [
      {
        id: 'c1c',
        userId: '5',
        user: mockUsers[4],
        content: 'This shot is pure fire! 🔥',
        createdAt: new Date('2025-10-05T10:30:00')
      }
    ],
    isLiked: true,
    createdAt: new Date('2025-10-05T08:00:00')
  },
  {
    id: '1d',
    userId: '1',
    user: mockUsers[0],
    imageUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Classic beauty 🚗✨ #classiccar #vintage',
    likes: 2567,
    comments: [],
    isLiked: false,
    createdAt: new Date('2025-10-05T14:00:00')
  },
  {
    id: '2',
    userId: '2',
    user: mockUsers[1],
    imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Golden hour in the mountains 🏔️✨ #nature #sunset',
    likes: 1234,
    comments: [
      {
        id: 'c1',
        userId: '3',
        user: mockUsers[2],
        content: 'Absolutely stunning!',
        createdAt: new Date('2025-10-02T10:30:00')
      },
      {
        id: 'c2',
        userId: '4',
        user: mockUsers[3],
        content: 'This is incredible! Where is this?',
        createdAt: new Date('2025-10-02T11:15:00')
      }
    ],
    isLiked: false,
    createdAt: new Date('2025-10-02T08:00:00')
  },
  {
    id: '2a',
    userId: '3',
    user: mockUsers[2],
    imageUrl: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'City lights never looked so good 🌃',
    likes: 856,
    comments: [
      {
        id: 'c3',
        userId: '2',
        user: mockUsers[1],
        content: 'Amazing perspective!',
        createdAt: new Date('2025-10-02T14:20:00')
      }
    ],
    isLiked: true,
    createdAt: new Date('2025-10-02T13:00:00')
  },
  {
    id: '3',
    userId: '4',
    user: mockUsers[3],
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Homemade pasta perfection 🍝 Recipe coming soon!',
    likes: 2103,
    comments: [
      {
        id: 'c4',
        userId: '5',
        user: mockUsers[4],
        content: 'This looks delicious!',
        createdAt: new Date('2025-10-02T16:45:00')
      },
      {
        id: 'c5',
        userId: '2',
        user: mockUsers[1],
        content: 'Can\'t wait for the recipe!',
        createdAt: new Date('2025-10-02T17:00:00')
      },
      {
        id: 'c6',
        userId: '3',
        user: mockUsers[2],
        content: 'My mouth is watering 😋',
        createdAt: new Date('2025-10-02T17:30:00')
      }
    ],
    isLiked: false,
    createdAt: new Date('2025-10-02T15:30:00')
  },
  {
    id: '4',
    userId: '5',
    user: mockUsers[4],
    imageUrl: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Perfect waves today 🏄‍♂️ #surflife',
    likes: 1567,
    comments: [],
    isLiked: true,
    createdAt: new Date('2025-10-02T18:00:00')
  },
  {
    id: '5',
    userId: '2',
    user: mockUsers[1],
    imageUrl: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Lost in the forest 🌲🌿',
    likes: 945,
    comments: [
      {
        id: 'c7',
        userId: '4',
        user: mockUsers[3],
        content: 'So peaceful!',
        createdAt: new Date('2025-10-03T09:15:00')
      }
    ],
    isLiked: false,
    createdAt: new Date('2025-10-03T08:00:00')
  },
  {
    id: '6',
    userId: '3',
    user: mockUsers[2],
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Architectural beauty 🏛️',
    likes: 1876,
    comments: [
      {
        id: 'c8',
        userId: '5',
        user: mockUsers[4],
        content: 'Love the symmetry!',
        createdAt: new Date('2025-10-03T10:30:00')
      }
    ],
    isLiked: true,
    createdAt: new Date('2025-10-03T09:30:00')
  }
];

export const mockHighlights: Highlight[] = [
  {
    id: 'h1',
    title: 'Cars 🏎️',
    coverImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=150',
    stories: [
      {
        id: 'hs1',
        user: mockUsers[0],
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
        isViewed: false
      },
      {
        id: 'hs2',
        user: mockUsers[0],
        imageUrl: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=400',
        isViewed: false
      }
    ]
  },
  {
    id: 'h2',
    title: 'Bikes 🏍️',
    coverImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=150',
    stories: [
      {
        id: 'hs3',
        user: mockUsers[0],
        imageUrl: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
        isViewed: false
      },
      {
        id: 'hs4',
        user: mockUsers[0],
        imageUrl: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=400',
        isViewed: false
      }
    ]
  },
  {
    id: 'h3',
    title: 'Friends 💙',
    coverImage: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=150',
    stories: [
      {
        id: 'hs5',
        user: mockUsers[0],
        imageUrl: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=400',
        isViewed: false
      }
    ]
  },
  {
    id: 'h4',
    title: 'Travel ✈️',
    coverImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=150',
    stories: [
      {
        id: 'hs6',
        user: mockUsers[0],
        imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
        isViewed: false
      }
    ]
  }
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    user: mockUsers[1],
    lastMessage: 'Hey! That car post was amazing! 🔥',
    timestamp: new Date('2025-10-06T08:30:00'),
    unread: true
  },
  {
    id: 'm2',
    user: mockUsers[2],
    lastMessage: 'When are you free for a ride?',
    timestamp: new Date('2025-10-06T07:15:00'),
    unread: true
  },
  {
    id: 'm3',
    user: mockUsers[3],
    lastMessage: 'Thanks for sharing! Really helpful',
    timestamp: new Date('2025-10-05T22:45:00'),
    unread: false
  },
  {
    id: 'm4',
    user: mockUsers[4],
    lastMessage: 'See you tomorrow!',
    timestamp: new Date('2025-10-05T18:20:00'),
    unread: false
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    user: mockUsers[1],
    type: 'like',
    content: 'liked your post',
    timestamp: new Date('2025-10-06T09:15:00'),
    postImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=80',
    isRead: false
  },
  {
    id: 'n2',
    user: mockUsers[2],
    type: 'comment',
    content: 'commented: "Sick ride bro! 🔥"',
    timestamp: new Date('2025-10-06T08:45:00'),
    postImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=80',
    isRead: false
  },
  {
    id: 'n3',
    user: mockUsers[3],
    type: 'follow',
    content: 'started following you',
    timestamp: new Date('2025-10-06T07:30:00'),
    isRead: false
  },
  {
    id: 'n4',
    user: mockUsers[4],
    type: 'like',
    content: 'liked your post',
    timestamp: new Date('2025-10-05T20:10:00'),
    postImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=80',
    isRead: true
  },
  {
    id: 'n5',
    user: mockUsers[1],
    type: 'comment',
    content: 'commented: "Absolutely insane! 🔥"',
    timestamp: new Date('2025-10-05T18:30:00'),
    postImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=80',
    isRead: true
  }
];

export const mockReels: Reel[] = [
  {
    id: '1', 
    userId: '1', 
    user: mockUsers[0], 
    videoUrl: 'https://videos.pexels.com/video-files/4434246/4434246-hd.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4434246/pexels-photo-4434246.jpeg?auto=compress&cs=tinysrgb&w=800', // Added thumbnailUrl
    caption: 'Crazy drift skills! 🤯 #drift #cars #racing',
    likes: 12345,
    comments: [],
    views: 10000,
    isLiked: false,
    song: 'Tokyo Drift - Teriyaki Boyz',
    createdAt: new Date('2023-10-30T10:00:00Z'),
  },
  {
    id: '2',
    userId: '2',
    user: mockUsers[1],
    videoUrl: 'https://videos.pexels.com/video-files/857030/857030-hd.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/857030/pexels-photo-857030.jpeg?auto=compress&cs=tinysrgb&w=800', // Added thumbnailUrl
    caption: 'Chasing waterfalls 🏞️ #nature #travel #adventure',
    likes: 8901,
    comments: [],
    views: 7500,
    isLiked: true,
    song: 'Waterfalls - TLC',
    createdAt: new Date('2023-10-29T15:30:00Z'),
  },
  {
    id: '3',
    userId: '3',
    user: mockUsers[2],
    videoUrl: 'https://videos.pexels.com/video-files/4692499/4692499-hd.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4692499/pexels-photo-4692499.jpeg?auto=compress&cs=tinysrgb&w=800', // Added thumbnailUrl
    caption: 'City lights at night ✨ #cityscape #urban #nightlife',
    likes: 5678,
    comments: [],
    views: 6000,
    isLiked: false,
    song: 'Blinding Lights - The Weeknd',
    createdAt: new Date('2023-10-28T20:00:00Z'),
  },
  {
    id: '4',
    userId: '4',
    user: mockUsers[3],
    videoUrl: 'https://videos.pexels.com/video-files/4496268/4496268-hd.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4496268/pexels-photo-4496268.jpeg?auto=compress&cs=tinysrgb&w=800', // Added thumbnailUrl
    caption: 'Baking my favorite cake 🎂 #baking #foodie #recipe',
    likes: 2345,
    comments: [],
    views: 3000,
    isLiked: true,
    song: 'Sugar - Maroon 5',
    createdAt: new Date('2023-10-27T12:00:00Z'),
  },
  {
    id: '5',
    userId: '5',
    user: mockUsers[4],
    videoUrl: 'https://videos.pexels.com/video-files/4434246/4434246-hd.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4434246/pexels-photo-4434246.jpeg?auto=compress&cs=tinysrgb&w=800', // Added thumbnailUrl
    caption: 'Surfing the waves 🏄‍♀️ #surfing #ocean #beachlife',
    likes: 9012,
    comments: [],
    views: 8000,
    isLiked: false,
    song: 'Surfin\' USA - The Beach Boys',
    createdAt: new Date('2023-10-26T16:00:00Z'),
  },
  {
    id: '6',
    userId: '1',
    user: mockUsers[0],
    videoUrl: 'https://videos.pexels.com/video-files/5078758/5078758-uhd_2160_3840_25fps.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/5078758/pexels-photo-5078758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Enjoying the sunset vibes!',
    likes: 1200,
    comments: [],
    views: 5000,
    isLiked: false,
    song: 'Sunset Melody',
    createdAt: new Date('2023-10-26T10:00:00Z'),
  },
  {
    id: '2',
    userId: '2',
    user: mockUsers[1],
    videoUrl: 'https://videos.pexels.com/video-files/5078758/5078758-uhd_2160_3840_25fps.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/5078758/pexels-photo-5078758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'City lights at night.',
    likes: 800,
    comments: [],
    views: 3000,
    isLiked: false,
    song: 'Night Drive',
    createdAt: new Date('2023-10-25T18:30:00Z'),
  },
  {
    id: '3',
    userId: '3',
    user: mockUsers[2],
    videoUrl: 'https://videos.pexels.com/video-files/5078758/5078758-uhd_2160_3840_25fps.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/5078758/pexels-photo-5078758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Mountain adventure!',
    likes: 1500,
    comments: [],
    views: 6000,
    isLiked: true,
    song: 'Adventure Anthem',
    createdAt: new Date('2023-10-24T08:00:00Z'),
  },
  {
    id: '4',
    userId: '4',
    user: mockUsers[3],
    videoUrl: 'https://videos.pexels.com/video-files/5078758/5078758-uhd_2160_3840_25fps.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/5078758/pexels-photo-5078758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Ocean waves.',
    likes: 900,
    comments: [],
    views: 4000,
    isLiked: false,
    song: 'Calm Seas',
    createdAt: new Date('2023-10-23T14:00:00Z'),
  },
  {
    id: '5',
    userId: '5',
    user: mockUsers[4],
    videoUrl: 'https://videos.pexels.com/video-files/5078758/5078758-uhd_2160_3840_25fps.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/5078758/pexels-photo-5078758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Forest exploration.',
    likes: 1100,
    comments: [],
    views: 4500,
    isLiked: true,
    song: 'Forest Sounds',
    createdAt: new Date('2023-10-22T09:30:00Z'),
  },
];

export const mockCurrentUser: User = {
  id: '0',
  username: 'D E B🔥',
  fullName: 'debxrup_',
  avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
  bio: 'Car Enthusiast 🏎️\nBike Lover 🏍️\n📍Mumbai'
};
