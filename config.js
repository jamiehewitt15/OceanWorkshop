const { ConfigHelper } = require("@oceanprotocol/lib");
const Web3 = require("web3");
const defaultConfig = new ConfigHelper().getConfig("development");

const urls = {
networkUrl: "http://localhost:8545",
aquarius: "http://localhost:5000",
providerUri: "http://localhost:8030",
};

const contracts = {
    "DTFactory": "0xedd4B3ABb71cea17ac7910e0E4FF6aDc3656a351",
    "BFactory": "0x6518B5AB2290552BCA0a0B0abFBfcb487234185f",
    "FixedRateExchange": "0xA62D4a817EBaEe3C885FeE4ae7B27090369743e7",
    "Metadata": "0xca08b8935a3086B549A6DCE8D0189e39A1F430a2",
    "Ocean": "0xF9596bED220Ab30ff9aaE104DfC5D380E21c9259",
    "Dispenser": "0xcD22E34cf82A9BA0fDa723071A79AddC19f7dc7D"
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
