const { ConfigHelper } = require("@oceanprotocol/lib");
const Web3 = require("web3");
const defaultConfig = new ConfigHelper().getConfig("development");

const urls = {
networkUrl: "http://localhost:8545",
aquarius: "http://localhost:5000",
providerUri: "http://localhost:8030",
};

const contracts = {
    "DTFactory": "0x38C17eded8B9e7fc7255c8aC73aCD050E8cBfaa4",
    "BFactory": "0xC34dDA3Dc1d0ef9927572540B88511DE871c8f45",
    "FixedRateExchange": "0xe35bA735D1032c9404f4996455311aF74E37A82F",
    "Metadata": "0xbfC8EeF53901E579A785d551FC086084f84c5899",
    "Ocean": "0xEd78981A53347741E7db58A21318546E626edb05",
    "Dispenser": "0xA6De8c4292460c4C0304a726995a6DB0d7a53DE5"
};

const config = {
...defaultConfig,
metadataCacheUri: urls.aquarius,
providerUri: urls.providerUri,
web3Provider: new Web3(urls.networkUrl),
};
module.exports = {
config,
contracts,
urls,
};
