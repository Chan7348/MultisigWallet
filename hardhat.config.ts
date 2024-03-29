import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
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
        // url: vars.get("MAINNET_ALCHEMY_URL") || "",
        // url: "https://rpc.merlinchain.io", // merlin 
        url: "https://arb-sepolia.g.alchemy.com/v2/a1Z6RxI8nUQLxzzNnYDbDkSzwZYpsmHU", //arbitrum sepolia
        // blockNumber: 19532800,
        
      },
      blockGasLimit: 60000000,
      // hardfork: "cancun",
    },
    arbitrum_sepolia: {
      url: "https://arb-sepolia.g.alchemy.com/v2/a1Z6RxI8nUQLxzzNnYDbDkSzwZYpsmHU" || "",
      accounts: [vars.get("TEST1_KEY"), vars.get("TEST2_KEY")],
    }
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: 'IQWAAF48I9BVSMJA8BIVEGM8Z55DZXTBSD',
    }
  }
};

export default config;
