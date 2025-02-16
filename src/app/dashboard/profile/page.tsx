'use client';

import { useAccount } from "wagmi";
import { FaEthereum } from "react-icons/fa";

export default function Profile() {
  const { address } = useAccount();

  // Temporary mock data
  const profile = {
    posts: 12,
    followers: 245,
    following: 189,
    bbTokens: 1250,
    totalEarned: 2500,
  };

  // Mock user posts
  const userPosts = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/200/200",
      likes: 42,
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/200/201",
      likes: 28,
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/200/202",
      likes: 35,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <div className="text-center">
          <div className="h-24 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
            <FaEthereum className="text-4xl text-white" />
          </div>
          <div className="font-mono text-sm text-white/60 mb-4">
            {address}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center py-4 border-t border-b border-white/10">
          <div>
            <div className="font-bold text-white">{profile.posts}</div>
            <div className="text-sm text-white/60">Posts</div>
          </div>
          <div>
            <div className="font-bold text-white">{profile.followers}</div>
            <div className="text-sm text-white/60">Followers</div>
          </div>
          <div>
            <div className="font-bold text-white">{profile.following}</div>
            <div className="text-sm text-white/60">Following</div>
          </div>
        </div>

        {/* Earnings */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center text-white/90">
            <span className="text-white/60">BB Tokens:</span>
            <span className="font-bold">{profile.bbTokens} BB</span>
          </div>
          <div className="flex justify-between items-center text-white/90">
            <span className="text-white/60">Total Earned:</span>
            <span className="font-bold">{profile.totalEarned} BB</span>
          </div>
        </div>
      </div>

      {/* User Posts Grid */}
      <div className="grid grid-cols-3 gap-2">
        {userPosts.map((post) => (
          <div key={post.id} className="aspect-square relative rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-sm font-medium">
                {post.likes} likes
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
