const Web3 = require("web3");
const { Ocean, DataTokens } = require("@oceanprotocol/lib");
const { testData } = require("./data");
 
const { factoryABI } = require("@oceanprotocol/contracts/artifacts/DTFactory.json");
const { datatokensABI } = require("@oceanprotocol/contracts/artifacts/DataTokenTemplate.json");
const { config, contracts, urls } = require("./config");
 
 
 
const run = async () => {
    const blob = `https://172.15.0.4/api/v1/services/consume`;
    const ocean = await Ocean.getInstance(config);
    const accounts = await ocean.accounts.list();
      
    const alice = accounts[0];
    const bob = accounts[1];
    console.log('Alice account address:', alice.id)
    console.log('Bob account address:', bob.id)
  
    const datatoken = new DataTokens(
      contracts.DTFactory,
      factoryABI,
      datatokensABI,
      new Web3(urls.networkUrl)
    );
    const tokenAddress = await datatoken.create(
       blob, 
       alice.getId(),
       '10000000000',
       'AliceDT',
       'DTA');
    console.log(`Deployed datatoken address: ${tokenAddress}`);
  
      //  Alice Mints 2000 datatokens
    const transaction1 = await datatoken.mint(tokenAddress, alice.getId(), '2000', alice.getId())
    const transactionId1 = transaction1['transactionHash']
    console.log('transactionId 1', transactionId1)
    
    let aliceBalance = await datatoken.balance(tokenAddress, alice.getId())
    console.log('Alice token balance:', aliceBalance)

    //  Alice Sends 50 datatokens to bob
    const transaction2 = await datatoken.transfer(tokenAddress, bob.getId(), '50', alice.getId())
    const transactionId2 = transaction2['transactionHash']
    console.log('transactionId 2', transactionId2)
    
    let bobBalance = await datatoken.balance(tokenAddress, bob.getId())
    aliceBalance = await datatoken.balance(tokenAddress, alice.getId())
    
    console.log('Alice token balance:', aliceBalance)
    console.log('Bob token balance:', bobBalance)

    // Alice Publishes dataset
    const price = '1' // in datatoken
    const publishedDate = new Date(Date.now()).toISOString().split('.')[0] + 'Z'
    const timeout = 0
 
    dataService = await ocean.assets.createAccessServiceAttributes(
      alice,
      price, // set the price in datatoken
      publishedDate,
      timeout
    );
    
      // publish asset
    const ddo = await ocean.assets.create(
      testData,
      alice,
      [dataService],
      tokenAddress
    );

    const did = ddo.id;
    console.log('DID:', did);

    await ocean.onChainMetadata.publish(ddo.id, ddo, alice.getId())
    
    // Wait For Aquarius to cache asset
    await new Promise(r => setTimeout(r, 35000));

    await ocean.assets.resolve(ddo.id).then((newDDO) => {
      console.log("Resolve", newDDO.id, ddo.id)
    })
    
    const asset = await ocean.assets.resolve(ddo.id)
    const accessService = await ocean.assets.getServiceByType(asset.id, 'access')
 
    // Bob downloads dataset
    const bobTransaction = await ocean.assets.order(asset.id, accessService.type, bob.getId())
      console.log("bobTransaction", bobTransaction)
    
      const data = await ocean.assets.download(
      ddo.id,
      bobTransaction,
      tokenAddress,
      bob,
      './datafiles'
      )
      bobBalance = await datatoken.balance(tokenAddress, bob.getId())
      console.log("Bob token balance:", bobBalance)

};

run();