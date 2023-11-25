import abi from "./ABI.json";
import Web3 from "web3";

class Contract {
  contractAddress = "0xdBBBC90778dC0AA9cff7D6cfADd44a0f6A5F3bb0";
  web3 = new Web3("http://localhost:8545");
  contract = new this.web3.eth.Contract(abi, this.contractAddress);

  async signIn(login, password) {
    try {
      return await this.contract.methods.signIn(login, password).call();
    } catch (error) {
      alert("Данные введены неверно!");
    }
  }

  async buyToken(amount, ether, wallet) {
    try {
      return await this.contract.methods
        .buyToken(amount)
        .send({ from: wallet, to: this.contract, value: amount });
    } catch (error) {
      console.log(error);
    }
  }

  async getLifeTime() {
    try {
      return await this.contract.methods.getLifeTime().call();
    } catch (error) {
      console.log(error);
    }
  }

  async getWhitelist(wallet) {
    try {
      return await this.contract.methods.getWhitelist().call({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserData(user, wallet) {
    try {
      return await this.contract.methods
        .getUserData(user)
        .call({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async takeWhitelistRequest(index, status, wallet) {
    try {
      return await this.contract.methods
        .takeWhitelistRequest(index, status)
        .send({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserPrivateTokens(address, wallet) {
    try {
      return await this.contract.methods
        .getUserPrivateTokens(address)
        .call({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserPublicTokens(address, wallet) {
    try {
      return await this.contract.methods
        .getUserPublicTokens(address)
        .call({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async giveReward(address, amount, wallet) {
    try {
      return await this.contract.methods
        .giveReward(address, amount)
        .send({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async transferToken(receiver, amount, type, wallet) {
    try {
      return await this.contract.methods
        .transferToken(receiver, amount, type)
        .send({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async sendRequestToWhitelist(wallet) {
    try {
      return await this.contract.methods
        .sendRequestToWhitelist()
        .send({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }

  async signUp(login, password, wallet) {
    try {
      if (this.web3.utils.isAddress(wallet)) {
        return this.contract.methods
          .signUp(login, password)
          .send({ from: wallet });
      }
    } catch (error) {
      console.log(alert("Неверно введенные данные!"));
    }
  }

  async getBalance(wallet) {
    try {
      return this.contract.methods.getBalance().call({ from: wallet });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Contract();
