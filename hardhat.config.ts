import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.25",
    settings: {
      evmVersion: "cancun",
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        // url: vars.get("MAINNET_INFURA_URL") || "",
        url: vars.get("MAINNET_ALCHEMY_URL") || "",
        blockNumber: 19532800,
      },
      blockGasLimit: 60000000,
      hardfork: "cancun",
    },
    localhost: {
      forking: {
        url: vars.get("MAINNET_ALCHEMY_URL") || "",
        blockNumber: 19532800,
      },
      blockGasLimit: 60000000,
      hardfork: "cancun",
    },
  },
};

export default config;
