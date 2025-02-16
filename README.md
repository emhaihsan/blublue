# BluBlue Frontend

BluBlue is a decentralized social media platform that rewards user engagement through NFTs and tokens.

> 🏆 This project is part of the **Indonesia Hacker House Hackathon 2025**, organized by [Blockdev.id](https://blockdev.id) and [Manta Network](https://manta.network).

## Related Repositories

- 📝 [Smart Contracts](https://github.com/emhaihsan/blublue-contract) - BluBlue's smart contract implementation

## Team Members

- **Pitchdeck & Documentation**:

  - Mr Punk (Duniaweb3)
  - Bayy
  - Eliska

- **Flowchart**:

  - Andika

- **Smart Contract**:

  - Ihsan

- **Backend**:

  - Saddam Machmud

- **Frontend & Wireframe**:
  - Bayy

## Features

- Wallet Connection using RainbowKit
- Social Media Feed
- Post Creation with Image Upload
- NFT Minting for Posts
- Token Rewards for Engagement
- User Profile Management

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- TailwindCSS
- RainbowKit & Wagmi
- IPFS (for image storage)
- Ethers.js

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # Reusable React components
├── hooks/                # Custom React hooks
├── styles/               # Global styles and Tailwind config
└── utils/               # Helper functions and utilities
```

## Development Roadmap

### Phase 1: Core Infrastructure

- Project setup and configuration
- Smart contract integration
- Wallet connection
- Basic routing and layout

### Phase 2: Social Features

- Post creation and feed
- Image upload to IPFS
- Like functionality
- User profiles

### Phase 3: Token Economy

- NFT minting for posts
- Token rewards for engagement
- Token balance display
- Transaction history

### Phase 4: Enhanced Features

- Comments and replies
- Post sharing
- Advanced profile customization
- Search functionality

### Phase 5: Platform Growth

- Mobile optimization
- Performance improvements
- Community features
- Analytics dashboard

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
