const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("../Ethereum/build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "cigar awesome fame rival truly city grape ensure sign require north text",
  "https://rinkeby.infura.io/v3/e89b9d4f5ba546e7816ca5b21e916ed3"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(
      JSON.parse(compiledFactory.interface)
    )
    .deploy({
      data: compiledFactory.bytecode,
    })
    .send({
      gas: "1000000",
      from: accounts[0],
    });

  console.log("Contract Deployed to ", result.options.address);
};

deploy();