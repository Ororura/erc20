import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";

interface IProps {
  children: ReactNode;
}

interface IUserData {
  login: string;
  wallet: string;
  seedTokens: string;
  privateTokens: string;
  publicTokens: string;
  whiteList: string;
  role: string;
  eth: string;
}

interface IValues {
  userData: IUserData;
  setUserData: Dispatch<SetStateAction<IUserData>>;
}

export const UserContext = React.createContext({} as IValues);

export const UserProvider: FC<IProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>({
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
