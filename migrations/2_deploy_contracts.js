const SimpleStorage = artifacts.require("SimpleStorage");
const StorageFactory = artifacts.require("StorageFactory");
const FundMe = artifacts.require("FundMe");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(StorageFactory);
  deployer.deploy(FundMe);
};
