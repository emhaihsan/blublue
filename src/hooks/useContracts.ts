"use client";

import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { contractAddresses } from "@/contracts/config";
import BluBluePostABI from "@/contracts/abis/BluBluePost.json";
import BBTokenABI from "@/contracts/abis/BBToken.json";
import BluBlueNFTABI from "@/contracts/abis/BluBlueNFT.json";
import { getContract, type Client } from "viem"; 

export function useContracts() {
  const { address } = useAccount();
  const publicClient = usePublicClient({ chainId: 3441006 });
  const { data: walletClient } = useWalletClient({ chainId: 3441006 });

  const postContract = getContract({
    address: contractAddresses.post,
    abi: BluBluePostABI,
    client: {
      public: publicClient as Client,
      wallet: walletClient as Client | undefined,
    },
  });

  const tokenContract = getContract({
    address: contractAddresses.token,
    abi: BBTokenABI,
    client: {
      public: publicClient as Client,
      wallet: walletClient as Client | undefined,
    },
  });

  const nftContract = getContract({
    address: contractAddresses.nft,
    abi: BluBlueNFTABI,
    client: {
      public: publicClient as Client,
      wallet: walletClient as Client | undefined,
    },
  });

  return {
    postContract,
    tokenContract,
    nftContract,
    isConnected: !!address,
    address,
  };
}