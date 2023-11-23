import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

  const values = { userData, setUserData };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
