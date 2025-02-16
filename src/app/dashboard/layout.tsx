'use client';

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaPlus } from "react-icons/fa";
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-black/20 border-b border-white/10 z-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              <Link href="/dashboard" className="text-white font-bold text-xl">
                BluBlue
              </Link>
              <ConnectButton />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-6 pt-20 pb-24">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 border-t border-white/10 z-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between py-3">
              <Link
                href="/dashboard"
                className={`flex flex-col items-center ${
                  pathname === "/dashboard" 
                    ? "text-blue-400" 
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                <FaHome className="text-2xl" />
                <span className="text-xs mt-1">Home</span>
              </Link>

              <Link
                href="/dashboard/new"
                className={`flex flex-col items-center ${
                  pathname === "/dashboard/new"
                    ? "text-blue-400"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                <FaPlus className="text-2xl" />
                <span className="text-xs mt-1">New Post</span>
              </Link>

              <Link
                href="/dashboard/profile"
                className={`flex flex-col items-center ${
                  pathname === "/dashboard/profile"
                    ? "text-blue-400"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                <FaUser className="text-2xl" />
                <span className="text-xs mt-1">Profile</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </ProtectedRoute>
  );
}
