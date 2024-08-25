const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress =
    "https://eth-sepolia.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0xb8d3BfA8fFB796DABe1E887D63860a07eBe1b198";

   
  const KingAnkit = await ethers.getContractFactory("KingAnkit", signer);
  const contract = await KingAnkit.attach(contractAddress);

  const numberOfTokensToMint = 5;

  await contract.mint(numberOfTokensToMint);

  
  console.log("Minted 5 Kings NFT's");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
