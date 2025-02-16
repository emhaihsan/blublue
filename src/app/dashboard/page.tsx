"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";

export default function Dashboard() {
  // Temporary mock data for posts
  const posts = [
    {
      id: 1,
      author: "0x1234...5678",
      imageUrl: "https://picsum.photos/400/400",
      caption: "Beautiful day! #blockchain #web3",
      likes: 42,
      isLiked: false,
    },
    {
      id: 2,
      author: "0x8765...4321",
      imageUrl: "https://picsum.photos/400/401",
      caption: "Exploring the future of social media",
      likes: 28,
      isLiked: true,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Posts Feed */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10"
        >
          {/* Post Image */}
          <div className="relative aspect-square">
            <Image
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Post Content */}
          <div className="p-4">
            {/* Author */}
            <div className="font-medium text-white/90 mb-2">
              {post.author}
            </div>

            {/* Caption */}
            <p className="text-white/70 mb-3">{post.caption}</p>

            {/* Like Button & Count */}
            <div className="flex items-center gap-2">
              <button className="text-xl transition-colors">
                {post.isLiked ? (
                  <FaHeart className="text-pink-500" />
                ) : (
                  <FaRegHeart className="text-white/60 hover:text-white/90" />
                )}
              </button>
              <span className="text-white/60 text-sm">
                {post.likes} likes
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
