import abi from "./ABI.json";
import Web3 from "web3";

const contractAddress = "0xb37c75BDaE0B5fBE3c75A9E3428c33EDBf9C4990";
const web3 = new Web3("http://localhost:8545");
const contract = new web3.eth.Contract(abi as any, contractAddress);

async function signIn(login: string, password: string) {
     return await contract.methods.signIn(login, password).call();}

async function buyToken(amount: number, ether: string, wallet: string) {
    const transObj = {
        from: wallet,
        to: contractAddress,
        value: amount,
        gas: "510000"
    }
    try{
    await contract.methods.buyToken(amount).send(transObj)} catch(error){ 
        console.log(error)
    }    
}

async function getLifeTime() {
    return await contract.methods.getLifeTime().call();
}

function getEthBalance(wallet: string) {
    const eth = web3.eth.getBalance(wallet);    
    return eth;
}

const ethBal = async (wallet: string) => await web3.eth.getBalance(wallet);

async function getWhitelist(wallet: string) {
    return await contract.methods.getWhitelist().call({from: wallet});    
}

async function getUserData(user: string, wallet: string) {
    return await contract.methods.getUserData(user).call({from: wallet})
}

async function takeWhitelistRequest(index: string, status: string, wallet: string) {
    await contract.methods.takeWhitelistRequest(index, status).send({from: wallet});    
}

async function getUserPrivateTokens(address: string, wallet: string) {
    return await contract.methods.getUserPrivateTokens(address).call({from: wallet})    
}

async function getUserPublicTokens(address: string, wallet: string) {
    return await contract.methods.getUserPublicTokens(address).call({from: wallet})    
}

async function giveReward(address: string, amount: string, wallet: string) {
     await contract.methods.getUserPublicTokens(address, amount).send({from: wallet})    
}

async function transferToken(receiver: string, amount: string, type: string, wallet: string) {
    await contract.methods.transferToken(receiver, amount, type).send({from: wallet})
}

async function sendRequestToWhitelist(wallet: string) {
    await contract.methods.transferToken().send({from: wallet})
}

export { signIn, buyToken, getLifeTime, getWhitelist, getUserData, takeWhitelistRequest, getUserPrivateTokens, getUserPublicTokens, giveReward, transferToken, sendRequestToWhitelist, ethBal };