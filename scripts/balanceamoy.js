const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/KingAnkit.sol/KingAnkit.json");

const tokenContractAddress = "0x35E0e41C68d63df9Ff17cbEc0eDa2ad166449B88";// still has to change polygon address 
const tokenABI = tokenContractJSON.abi;
const Token_HolderAddress = "0x34194173536f556BcC74075aceDC1DeF287A9C80";  


async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenContractAddress);
    const balance = await token.balanceOf(Token_HolderAddress);
    // const updated_blance = 5
    // console.log(`You now have: ${updated_blance} NFTs in your wallet`);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();