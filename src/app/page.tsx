import Link from "next/link";
import {
  FaRocket,
  FaWallet,
  FaChartLine,
  FaBitcoin,
  FaUserFriends,
  FaLock,
  FaGift,
  FaUsers,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import { ConnectWallet } from "@/components/ConnectWallet";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 backdrop-blur-sm bg-white/10 z-50">
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
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
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
            <ConnectWallet />
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
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect & Create
              </h3>
              <p className="text-blue-100">
                Join the community and start creating engaging content that
                resonates with your audience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-purple-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Engage & Earn
              </h3>
              <p className="text-blue-100">
                Every 1000 likes from verified users converts into valuable
                points for creators.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaWallet className="text-pink-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Withdraw & Grow
              </h3>
              <p className="text-blue-100">
                Convert your earned points into BB tokens and participate in the
                growing ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-800/50 to-indigo-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FaLock className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Secure Authentication
                </h3>
                <p className="text-blue-100">
                  Multi-platform login support with social media, email, and
                  Web3 wallet integration.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <FaGift className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Reward System
                </h3>
                <p className="text-blue-100">
                  Earn points through engagement and convert them into BB
                  tokens.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-pink-500/20 p-3 rounded-lg">
                <FaChartLine className="text-pink-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-blue-100">
                  Track your engagement, earnings, and growth with detailed
                  analytics.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FaCheckCircle className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Verified Content
                </h3>
                <p className="text-blue-100">
                  Quality content verification system to maintain platform
                  integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Be part of the next generation of social media. Create, engage, and
            earn with Blublue.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/whitepaper"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/community"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <FaRocket className="text-blue-400 w-6 h-6" />
              <span className="ml-2 text-lg font-bold text-white">BluBLUE</span>
            </div>
            <div className="flex gap-6">
              <Link
                href="/help"
                className="text-white/80 hover:text-white transition-colors"
              >
                HELP CENTER
              </Link>
              <Link
                href="https://x.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                X
              </Link>
              <Link
                href="https://instagram.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                INSTAGRAM
              </Link>
              <Link
                href="/farcaster"
                className="text-white/80 hover:text-white transition-colors"
              >
                FARCASTER
              </Link>
            </div>
            <div className="text-white/60 text-sm">
              &copy; 2025 Blublue. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Icons */}
      <div className="fixed top-40 left-20 animate-float backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaWallet className="text-blue-400 w-8 h-8" />
      </div>
      <div className="fixed top-60 right-20 animate-float-delayed backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaChartLine className="text-purple-400 w-8 h-8" />
      </div>
      <div className="fixed bottom-40 left-40 animate-float backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaBitcoin className="text-yellow-400 w-8 h-8" />
      </div>
      <div className="fixed right-40 top-40 animate-float-delayed backdrop-blur-2xl bg-white/5 p-4 rounded-full">
        <FaUserFriends className="text-pink-400 w-8 h-8" />
      </div>
    </main>
  );
}
