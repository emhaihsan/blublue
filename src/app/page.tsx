import Image from "next/image";
import Link from "next/link";
import {
  FaRocket,
  FaHeart,
  FaImage,
  FaBitcoin,
  FaRobot,
  FaWallet,
  FaChartLine,
  FaUserFriends,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Logo */}
      <nav className="absolute top-0 w-full p-6 backdrop-blur-sm bg-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FaRocket className="text-blue-400 w-8 h-8" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              BluBLUE
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/community"
              className="text-white/80 hover:text-white transition-colors"
            >
              Community
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Social Finance
            </span>
            <br />
            <span className="text-white">Reimagined</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the future of social networking where every interaction
            has value. Connect, create, and earn in the Web3 ecosystem.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/auth"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Connect Wallet
            </Link>
            <Link
              href="/whitepaper"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Read Whitepaper
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-20 w-full">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400">$2.5M+</div>
                <div className="text-blue-100">Total Value Locked</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-blue-100">Active Users</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-pink-400">1M+</div>
                <div className="text-blue-100">Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Icons */}
      <div className="absolute animate-float top-40 left-20 backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaWallet className="text-blue-400 w-8 h-8" />
      </div>
      <div className="absolute animate-float-delayed top-60 right-20 backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaChartLine className="text-purple-400 w-8 h-8" />
      </div>
      <div className="absolute animate-float bottom-40 left-40 backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaBitcoin className="text-yellow-400 w-8 h-8" />
      </div>
      <div className="absolute animate-float-delayed right-40 top-40 backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaUserFriends className="text-pink-400 w-8 h-8" />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-white/80">
        <div className="flex justify-center space-x-6">
          <Link href="/help" className="hover:text-white transition-colors">
            HELP CENTER
          </Link>
          <span>•</span>
          <Link
            href="https://x.com"
            className="hover:text-white transition-colors"
          >
            X
          </Link>
          <span>•</span>
          <Link
            href="https://instagram.com"
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </Link>
          <span>•</span>
          <Link
            href="/farcaster"
            className="hover:text-white transition-colors"
          >
            FARCASTER
          </Link>
        </div>
      </footer>
    </main>
  );
}
