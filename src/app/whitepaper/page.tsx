import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Whitepaper() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-12 text-white/90">
          {/* Header */}
          <header className="text-center space-y-4 mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Blublue Whitepaper
            </h1>
            <p className="text-xl text-white/80">
              Revolutionizing Social Media through Decentralization
            </p>
          </header>

          {/* Abstract */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">Abstract</h2>
            <p>
              Blublue represents a paradigm shift in social media engagement by introducing a decentralized platform that transforms social interactions into tangible value. By leveraging blockchain technology and tokenomics, we create an ecosystem where content creators are directly rewarded for their contributions and engagement.
            </p>
          </section>

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">1. Introduction</h2>
            <p>
              In the current social media landscape, user engagement and content creation generate immense value for platforms, while creators often struggle to monetize their contributions effectively. Blublue addresses this imbalance by introducing a revolutionary "Like-to-Value" system, where engagement is directly converted into tangible rewards.
            </p>
          </section>

          {/* Platform Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">2. Platform Overview</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-4">2.1 Key Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multi-Platform Authentication
                <ul className="list-disc pl-6 mt-2 text-white/80">
                  <li>Social Media Integration</li>
                  <li>Email Authentication</li>
                  <li>Web3 Wallet Connect</li>
                </ul>
              </li>
              <li>User Experience
                <ul className="list-disc pl-6 mt-2 text-white/80">
                  <li>Instagram-inspired Interface</li>
                  <li>Rodeo Club Design Elements</li>
                  <li>Intuitive Navigation</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Tokenomics */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">3. Tokenomics</h2>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">BB Token (ERC20)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Total Supply:</h4>
                  <p>1 Billion BB Tokens</p>
                </div>
                <div>
                  <h4 className="font-semibold">Token Distribution:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>40% - Ecosystem and Creator Rewards</li>
                    <li>30% - Market Allocation</li>
                    <li>10% - Early Adopters/Airdrop (1-year vesting)</li>
                    <li>10% - Venture Capital (2-year vesting)</li>
                    <li>10% - Treasury (3-year vesting)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Economy */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">4. Platform Economy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">4.1 Like-to-Value System</h3>
                <p>
                  Every 1,000 likes from verified users (authenticated through Telegram and Twitter) are converted into points for content creators, establishing a direct correlation between engagement and value.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">4.2 Point System</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>1,000 points available for every $1 spent</li>
                  <li>Points can be used to support creators</li>
                  <li>Platform retains 30% of points allocated to creators</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Revenue Model */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">5. Revenue Model</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Transaction Fees</h3>
                <p>Revenue generated from point purchase transactions and platform interactions.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Point Share</h3>
                <p>30% platform share from points received by content creators.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Advertising</h3>
                <p>Income from promoted content, channel partnerships, and strategic collaborations.</p>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">6. Roadmap</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Phase 1: Foundation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Platform Development and Testing</li>
                  <li>Smart Contract Audits</li>
                  <li>Community Building</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Phase 2: Launch</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Token Generation Event</li>
                  <li>Platform Beta Release</li>
                  <li>Initial Creator Onboarding</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Phase 3: Growth</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Feature Expansion</li>
                  <li>Strategic Partnerships</li>
                  <li>Global Market Expansion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-400">7. Conclusion</h2>
            <p>
              Blublue represents a significant step forward in the evolution of social media platforms. By combining decentralized technology with proven social engagement mechanics, we create a sustainable ecosystem that fairly rewards all participants while maintaining platform growth and innovation.
            </p>
          </section>

          {/* Footer */}
          <footer className="text-center text-white/60 pt-12">
            <p>© 2025 Blublue. All rights reserved.</p>
            <p className="text-sm mt-2">Version 1.0</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
