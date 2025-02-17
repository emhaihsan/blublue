import { Address } from "viem";

export const MANTA_PACIFIC_TESTNET = {
  id: 3441006,
  name: 'Manta Pacific Testnet',
  network: 'manta-pacific-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_MANTA_PACIFIC_RPC!],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_MANTA_PACIFIC_RPC!],
    },
  },
  blockExplorers: {
    default: { name: 'Manta Explorer', url: 'https://pacific-explorer.manta.network' },
  },
  testnet: true,
};

export const contractAddresses = {
  post: process.env.NEXT_PUBLIC_BLUBLUE_POST_ADDRESS! as Address,
  token: process.env.NEXT_PUBLIC_BLUBLUE_TOKEN_ADDRESS! as Address,
  nft: process.env.NEXT_PUBLIC_BLUBLUE_NFT_ADDRESS! as Address,
} as const;

export type ContractAddresses = typeof contractAddresses;