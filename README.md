# Steps to run this project

1. clone this project and install it
```
git clone https://github.com/jamiehewitt15/OceanWorkshop.git
cd OceanWorkshop
npm install
```

2. In a seperate terminal clone barge and run it
```
git clone https://github.com/oceanprotocol/barge.git
cd barge
./start_ocean.sh --with-provider2 --no-dashboard
```

3. Let ocean.js know where to pickup the smart contract addresses, which has been written out by Barge in this location:
```
export ADDRESS_FILE="${HOME}/.ocean/ocean-contracts/artifacts/address.json"
```

4. Run the project
```
node index
```