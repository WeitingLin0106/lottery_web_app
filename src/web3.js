import Web3 from "web3";

//metamask use web3 v0.20's provider to link to Rinkeby. However, web3 v0.20 is too old so it has many problem.
//To solve this, we use web3 v1.0 and inject to web3 v0.20's provider.

//window.web3 is going to copy metamask library
//currentProvider is install or copy at that web3.
//The provider connects Rinkeby testnet and can access to everythin we could possibly want.
const web3 = new Web3(window.web3.currentProvider);

export default web3;
