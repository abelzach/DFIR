import { ethers } from "hardhat";
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const CaseStorage = await ethers.getContractFactory("CaseStorage");
  const casestorage = await CaseStorage.deploy();

  console.log("Token address:", casestorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});