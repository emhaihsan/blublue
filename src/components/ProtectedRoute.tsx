'use client';

import { useWalletStatus } from "@/hooks/useWalletStatus";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isConnected } = useWalletStatus();

  if (!isConnected) {
    return null; // The useWalletStatus hook will handle the redirect
  }

  return <>{children}</>;
}
