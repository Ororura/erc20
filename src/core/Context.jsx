import React, { useState, createContext } from "react";
import Contract from "../services/Contract";

export const UserContext = createContext({});

export const ContextWrapper = ({ children }) => {
  const [userData, setUserData] = useState({
    login: "",
    wallet: "",
    seedTokens: "",
    privateTokens: "",
    publicTokens: "",
    whiteList: "",
    role: "",
    eth: "",
  });
  
  const [balance, setBalance] = useState({
    eth: "",
    seedTokens: "",
    privateTokens: "",
    publicTokens: "",
  });

  const getBalance = async () => {
    const balance = await Contract.getBalance(userData.wallet);
    setBalance({ eth: balance[0], seedTokens: balance[1], privateTokens: balance[2], publicTokens: balance[3] });
  };
  
  const setUser = (user) => {
    setUserData(user);
  };

  const values = { userData, setUser, getBalance, balance };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
