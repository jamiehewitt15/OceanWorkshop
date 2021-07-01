const { ConfigHelper } = require("@oceanprotocol/lib")
const Web3 = require("web3")
const defaultConfig = new ConfigHelper().getConfig("development")

const urls = {
    networkUrl: "http://localhost:8545",
    aquarius: "http://localhost:5000",
    providerUri: "http://localhost:8030",
}

const contracts = {
    "DTFactory": "0xb56C5411dA4394D0Bb7Ff27ffb27822D6E953FCa",
    "BFactory": "0x907cA6469867bC254F2767E3240138ec9231b0E5",
    "FixedRateExchange": "0x291f86a873A1b42Fb544451268d6205Cd6B3E5E6",
    "Metadata": "0x07F8A68375883B8A95b3D62DD699e2220c3f3cA9",
    "Ocean": "0x8c3b64E723080BFc7Cc58Cf3625C84A3793810A4",
    "Dispenser": "0xFCf139FC39078C510471Fed0a0316F4008535F07"
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
   
   