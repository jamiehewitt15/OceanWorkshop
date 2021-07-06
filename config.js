const { ConfigHelper } = require("@oceanprotocol/lib");
const Web3 = require("web3");
const defaultConfig = new ConfigHelper().getConfig("development");

const urls = {
networkUrl: "http://localhost:8545",
aquarius: "http://localhost:5000",
providerUri: "http://localhost:8030",
};

const contracts = {
    "DTFactory": "0x62E7C83e550f278D29d1bF789706dcE773d4d6E1",
    "BFactory": "0xf3C5F8FA99D6187c49e59d80BD8258347Ae08128",
    "FixedRateExchange": "0xe63859307F79D5E7078b378B426e75BFCdF4645a",
    "Metadata": "0xDabEEF0F679A4D1908E9ae05157d717fc5c42264",
    "Ocean": "0x6ffbDb86b390aD442Cf6E61570c9D4247D8Fd028",
    "Dispenser": "0x50c907f89C6BEb73e9B5776314ee2c5C223DfCd1"
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
