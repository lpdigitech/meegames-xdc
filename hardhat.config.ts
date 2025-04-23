require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Install dotenv if you haven't already: npm install dotenv

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "0x0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
  solidity: "0.8.28",
  networks: {
    xdc: {
      url: "https://rpc.xinfin.network",
      accounts: [PRIVATE_KEY],
      chainId: 50,
    },
    xdc_testnet: {
      url: "https://erpc.apothem.network",
      accounts: [PRIVATE_KEY],
      chainId: 51,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
