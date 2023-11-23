import React, { useContext } from "react";
import UserInfo from "../../component/UserInfo/UserInfo";
import WithNavBar from "../../component/HOC/HOC";
import "bootstrap/dist/css/bootstrap.css";
import BuyTokens from "../../component/BuyTokens/BuyTokens";
import Timers from "../../component/Timers/Timers";
import Whitelist from "../../component/Whitelist/Whitelist";
import GetUserbal from "../../component/GetUserBal/GetUserbal";
import ApproveWhitelist from "../../component/ApproveWhitelist/ApproveWhitelist";
import PublicTokens from "../../component/PublicTokens/PublicTokens";
import PrivateTokens from "../../component/PrivateTokens/PrivateTokens";
import SendReward from "../../component/SendReward/SendReward";
import SendTokens from "../../component/SendTokens/SendTokens";
import SendWhitelistReq from "../../component/SendWhitelistReq/SendWhitelistReq";
import { UserContext } from "../../../core/Context";

const Main = () => {
  const {userData} = useContext(UserContext);
  return (
    <div className="d-flex flex-column align-items-center">
        {userData.role  == "" ? <p style={{fontSize:"30px"}}>Авторизуйтесь!</p> : <></> }
        {userData.role  == "" ? <></> : <Timers /> }
        {userData.role  == "" ? <></> : <UserInfo/> }
        {userData.role  == "" ? <></> : userData.whiteList == true ? <></> : <SendWhitelistReq/> }
        {userData.role  == 1 ? <Whitelist/> : <></> }
        {userData.role  == 1 ? <ApproveWhitelist/> : <></> }
        {userData.role  == "" ? <></> : <BuyTokens/> }
        {userData.role  == 3 ? <GetUserbal/> : <></> }
        {userData.role  == 2 ? <PrivateTokens/> : <></> }
        {userData.role  == 1 ? <PublicTokens/> : <></> }
        {userData.role  == 2 ? <SendReward/> : <></> }
        {userData.role  == "" ? <></> : <SendTokens/> }
    </div>
  );
};

const MainWithNavBar = WithNavBar(<Main />);

export default MainWithNavBar;
