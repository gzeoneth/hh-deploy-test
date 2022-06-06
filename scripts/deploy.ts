import { ethers } from "hardhat";

async function main() {
  const Foo = await ethers.getContractFactory("Foo");
  const foo = await Foo.deploy();

  await foo.deployed();

  console.log("Foo deployed to:", foo.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
