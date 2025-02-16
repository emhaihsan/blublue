'use client';

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaImage, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function NewPost() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedImage(file);
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please select an image');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement post creation with smart contract and IPFS
      console.log("Creating post:", { image: selectedImage, caption });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
      <h1 className="text-2xl font-bold mb-6 text-white/90">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">
            Image
          </label>
          
          {!previewUrl ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-white/40 transition-colors"
            >
              <FaImage className="mx-auto text-4xl text-white/40 mb-2" />
              <p className="text-white/60">Click to upload an image</p>
              <p className="text-white/40 text-sm mt-1">JPG, PNG, GIF</p>
            </div>
          ) : (
            <div className="relative aspect-square">
              <Image
                src={previewUrl}
                alt="Preview"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
        </div>

        {/* Caption */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={4}
            className="block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Write a caption for your post..."
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !selectedImage}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-all transform hover:scale-105"
        >
          {isLoading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
