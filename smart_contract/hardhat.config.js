require("@nomicfoundation/hardhat-toolbox");


const ALCHEMY_API_KEY = "kkVh0hv3oLUgcHp1Sz8_vmKboqfqjmqe";


const SEPOLIA_PRIVATE_KEY = "84cc58bcb1a2829370e8fa1690678d613f7aba484aa5f1adce84c4c6782b6137";

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
