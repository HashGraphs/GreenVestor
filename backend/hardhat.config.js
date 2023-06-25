require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});
const KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hedera :{
      url: `https://testnet.hashio.io/api`,
      chainId: 296,
      accounts: [KEY],
      
    },
    
  },
};