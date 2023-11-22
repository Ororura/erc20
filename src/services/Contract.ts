import abi from "./ABI.json";
import Web3 from "web3";

const contractAddress = "0xDB1C97A653517a0dd5674310a500D035f5b8B533";
const web3 = new Web3("http://localhost:8545");
const contract = new web3.eth.Contract(abi as any, contractAddress);

async function signIn(login: string, password: string, wallet: string) {
     return await contract.methods.signIn(login, password).call({from: wallet});}

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

async function getWhitelist(wallet: string) {
    return await contract.methods.getWhitelist().call({from: wallet});    
}

async function getUserData(user: string, wallet: string) {
    return await contract.methods.getUserData(user).call({from: wallet})
}

async function takeWhitelistRequest(index: string, status: string, wallet: string) {
    await contract.methods.takeWhitelistRequest(index, status).send({from: wallet});    
}

export { signIn, buyToken, getLifeTime, getWhitelist, getUserData, takeWhitelistRequest };