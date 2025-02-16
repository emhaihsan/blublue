"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWalletStatus } from "@/hooks/useWalletStatus";

export function ConnectWallet() {
  // This hook will handle the routing based on wallet connection
  const { isConnected } = useWalletStatus();

  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => {
        if (!isConnected) {
          return (
            <button
              onClick={openConnectModal}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Connect Wallet
            </button>
          );
        }

        return null;
      }}
    </ConnectButton.Custom>
  );
}
