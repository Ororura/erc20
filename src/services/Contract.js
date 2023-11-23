import abi from "./ABI.json";
import Web3 from "web3";

const contractAddress = "0xdBBBC90778dC0AA9cff7D6cfADd44a0f6A5F3bb0";
const web3 = new Web3("http://localhost:8545");
const contract = new web3.eth.Contract(abi, contractAddress);

async function signIn(login, password) {
  return await contract.methods.signIn(login, password).call();
}

async function buyToken(amount, ether, wallet) {
  const transObj = {
    from: wallet,
    to: contractAddress,
    value: amount,
  };
  try {
    await contract.methods.buyToken(amount).send(transObj);
  } catch (error) {
    console.log(error);
  }
}

async function getLifeTime() {
  return await contract.methods.getLifeTime().call();
}

async function ethBal(wallet) {
  return await web3.eth.getBalance(wallet);
}

async function getWhitelist(wallet) {
  return await contract.methods.getWhitelist().call({ from: wallet });
}

async function getUserData(user, wallet) {
  return await contract.methods.getUserData(user).call({ from: wallet });
}

async function takeWhitelistRequest(index, status, wallet) {
  await contract.methods.takeWhitelistRequest(index, status).send({ from: wallet });
}

async function getUserPrivateTokens(address, wallet) {
  return await contract.methods.getUserPrivateTokens(address).call({ from: wallet });
}

async function getUserPublicTokens(address, wallet) {
  return await contract.methods.getUserPublicTokens(address).call({ from: wallet });
}

async function giveReward(address, amount, wallet) {
  await contract.methods.getUserPublicTokens(address, amount).send({ from: wallet });
}

async function transferToken(receiver, amount, type, wallet) {
  await contract.methods.transferToken(receiver, amount, type).send({ from: wallet });
}

async function sendRequestToWhitelist(wallet) {
  await contract.methods.transferToken().send({ from: wallet });
}

export {
  signIn,
  buyToken,
  getLifeTime,
  getWhitelist,
  getUserData,
  takeWhitelistRequest,
  getUserPrivateTokens,
  getUserPublicTokens,
  giveReward,
  transferToken,
  sendRequestToWhitelist,
  ethBal,
};
