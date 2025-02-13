import Image from 'next/image'
import Link from 'next/link'
import { FaRocket, FaHeart, FaImage, FaBitcoin, FaRobot } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-200 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <FaRocket className="text-white w-10 h-10" />
        <span className="ml-2 text-xl font-bold text-white">BluBLUE</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
          Socializing Meets Earning
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white text-center mb-8">
          The Future of Finance.
        </h2>
        <Link
          href="/auth"
          className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Log in / Sign up
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-white">
        <div className="flex justify-center space-x-4">
          <Link href="/help" className="hover:underline">HELP CENTER</Link>
          <span>•</span>
          <Link href="https://x.com" className="hover:underline">X</Link>
          <span>•</span>
          <Link href="https://instagram.com" className="hover:underline">INSTAGRAM</Link>
          <span>•</span>
          <Link href="/farcaster" className="hover:underline">FARCASTER</Link>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <FaHeart className="text-pink-500 w-10 h-10" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <FaImage className="text-purple-500 w-12 h-12" />
      </div>
      <div className="absolute bottom-40 left-40 animate-float">
        <FaBitcoin className="text-yellow-500 w-12 h-12" />
      </div>
      <div className="absolute right-20 top-20 animate-float-delayed">
        <FaRobot className="text-blue-500 w-12 h-12" />
      </div>
    </main>
  )
}
