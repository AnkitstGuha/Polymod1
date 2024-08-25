# Polymod1
# KingAnkit NFT Contract

## Overview

The KingAnkit contract is an ERC721A implementation for minting and managing NFTs. This contract is deployed on the Sepolia test network and interacts with the Polygon network for cross-chain operations.

## Features

- **Minting NFTs**: Allows the owner to mint up to 5 NFTs.
- **Approval and Deposit**: Approves NFTs for transfer and deposits them into the Polygon network.
- **Balance Checking**: Checks the NFT balance of a specified address.

## Contract Details

- **Contract Name**: KingAnkit
- **Token Symbol**: KNGANK
- **Base URI**: `https://gateway.pinata.cloud/ipfs/QmX6KRDEkgsg8cqrK2y44b7qyxvao834sHgtnDY1rofvx5/`
- **Prompt Description**: "The NFT represents that there was once a worthy, clever, and beloved king named Ankit."

## Deployment

### Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your machine.
2. **Hardhat**: Ensure Hardhat is installed in your project. If not, install it via npm:
```bash
   npm install --save-dev hardhat
```
PRIVATE_KEY=your_private_key
Installation
Clone the repository and install dependencies:

bash
```bash
git clone <repository-url>
cd <repository-folder>
npm install
```
Deploy the Contract
- npx hardhat run scripts/deploy.js
- npx hardhat run scripts/batchmint.js
- npx hardhat run scripts/approveddeposite.js
- npx hardhat run scripts/balanceamoy.js

#### balancyamoy.js
Purpose: Checks the NFT balance of a specific address on the Polygon network.
Network: Polygon (Amoy)
Dependencies: Hardhat, ethers

![image](https://github.com/user-attachments/assets/90358e16-c899-4cbb-97cd-2f0a7c94e317)

![image](https://github.com/user-attachments/assets/adfa1584-6f60-4655-945b-4c8834600161)
