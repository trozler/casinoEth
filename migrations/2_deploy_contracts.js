var Casino = artifacts.require("./Casino.sol");
module.exports = function (deployer) {
  deployer.deploy(web3.toWei(10, "wei"), 100, { gas: 3000000 });
};
