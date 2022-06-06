# Reproduction

```
$ yarn hardhat run scripts/deploy.ts --network arbitrumTestnet
Generating typings for: 1 artifacts in dir: typechain for target: ethers-v5
Successfully generated 5 typings!
Compiled 1 Solidity file successfully
Foo deployed to: 0x69247689C4D07ad75FAa3C04b04245059501dB99

$ yarn hardhat verify --network arbitrumTestnet 0x69247689C4D07ad75FAa3C04b04245059501dB99
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/Foo.sol:Foo at 0x69247689C4D07ad75FAa3C04b04245059501dB99
for verification on the block explorer. Waiting for verification result...

We tried verifying your contract Foo without including any unrelated one, but it failed.
Trying again with the full solc input used to compile and deploy it.
This means that unrelated contracts may be displayed on Etherscan...

Successfully submitted source code for contract
contracts/Foo.sol:Foo at 0x69247689C4D07ad75FAa3C04b04245059501dB99
for verification on the block explorer. Waiting for verification result...

Error in plugin @nomiclabs/hardhat-etherscan: The contract verification failed.
Reason: Fail - Unable to verify

For more info run Hardhat with --show-stack-traces
error Command failed with exit code 1.
```
