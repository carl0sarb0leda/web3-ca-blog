require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { NEXT_PUBLIC_INFURA_PROJECT_ID, NEXT_PUBLIC_METAMASK_API_PRIVATE_KEY } = process.env;
console.log('PK', NEXT_PUBLIC_METAMASK_API_PRIVATE_KEY);
console.log('ProjectID:', NEXT_PUBLIC_INFURA_PROJECT_ID);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${NEXT_PUBLIC_INFURA_PROJECT_ID}`,
      accounts: [NEXT_PUBLIC_METAMASK_API_PRIVATE_KEY]
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [NEXT_PUBLIC_METAMASK_API_PRIVATE_KEY]
    },
  }
};
