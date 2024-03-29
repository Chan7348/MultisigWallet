import { ethers } from "hardhat";
import { vars } from "hardhat/config";

async function main() {
  const Wallet = await ethers.deployContract("Wallet", [[vars.get("TEST1_ACCOUNT"), vars.get("TEST2_ACCOUNT")], 2]);

  await Wallet.waitForDeployment();

  console.log(
    `deployed to ${Wallet.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
