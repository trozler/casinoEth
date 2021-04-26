const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    abs_casinoethe_trozlerblockservice_trozlerblockservice: {
      network_id: "*",
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('/Users/tonyrosler/Documents/NYUMaster/NYU/SuperSeniorSpring/cloudComputing/assignments/hw6/casinoEth/myblockchainmember.env', 'utf-8'), "https://trozlerblockservice.blockchain.azure.com:3200/oMdefTKMTNmRh5ZPo0p-Plo_")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.4.20"
    }
  },
  db: {
    enabled: false
  }
};
