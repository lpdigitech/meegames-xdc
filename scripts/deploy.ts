const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  // Define initial supply (e.g., 1 million tokens with 18 decimals)
  const initialSupply = hre.ethers.parseUnits("100000000", 18);

  // Deploy the contract
  console.log("Deploying MyToken...");
  const myToken = await MyToken.deploy(initialSupply);
  await myToken.waitForDeployment();

  const address = await myToken.getAddress();
  console.log("MyToken deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
