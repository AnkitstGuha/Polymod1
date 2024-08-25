// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract KingAnkit is ERC721A {
    address public owner;

    uint256 public maxQuantity = 5;


    
    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/QmX6KRDEkgsg8cqrK2y44b7qyxvao834sHgtnDY1rofvx5/";

    
    string public prompt = "The nft represent that there was once a worthy, clever and people loved king name Ankit.";

    constructor() ERC721A("KingAnkit", "KNGANK") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5"
        );
        _mint(msg.sender, quantity);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
