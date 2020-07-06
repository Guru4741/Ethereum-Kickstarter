import Web3 from 'web3';


let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== "undefined") {
    // We are in the browser and Metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server Or the user is not running Metamask
    const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/e89b9d4f5ba546e7816ca5b21e916ed3");
    web3 = new Web3(provider);
}

export default web3;