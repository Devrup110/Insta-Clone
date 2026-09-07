import { Post } from '../../Types';

interface ExploreViewProps {
  posts: Post[];
}

export const ExploreView = ({ posts }: ExploreViewProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Explore</h2>

      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="aspect-square overflow-hidden group cursor-pointer relative"
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex gap-6 text-white font-semibold">
                <span className="flex items-center gap-2">
                  ❤️ {post.likes}
                </span>
                <span className="flex items-center gap-2">
                  💬 {post.comments.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
