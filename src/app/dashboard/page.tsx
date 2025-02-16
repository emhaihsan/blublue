import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
      <nav className="fixed top-0 w-full p-6 backdrop-blur-sm bg-white/10 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Blublue Dashboard</h1>
          <ConnectButton />
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Your Profile</h2>
            <div className="space-y-2 text-blue-100">
              <p>Total Points: 0</p>
              <p>Posts: 0</p>
              <p>Followers: 0</p>
            </div>
          </div>

          {/* Earnings Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Earnings</h2>
            <div className="space-y-2 text-blue-100">
              <p>Available BB Tokens: 0</p>
              <p>Points to Convert: 0</p>
              <p>Total Earned: 0 BB</p>
            </div>
          </div>

          {/* Activity Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="text-blue-100">
              <p className="text-center py-8">No recent activity</p>
            </div>
          </div>
        </div>

        {/* Create Post Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-white mb-4">Create Post</h2>
          <textarea 
            className="w-full bg-white/5 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            rows={4}
          />
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-all">
            Post
          </button>
        </div>
      </div>
    </main>
  );
}
