import React from "react";
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
const Main = () => {
  return (
    <div>
      <Timers></Timers>
      <UserInfo></UserInfo>
      <SendWhitelistReq></SendWhitelistReq>
      <Whitelist></Whitelist>
      <BuyTokens></BuyTokens>
      <GetUserbal></GetUserbal>
      <ApproveWhitelist></ApproveWhitelist>
      <PrivateTokens></PrivateTokens>
      <PublicTokens></PublicTokens>
      <SendReward></SendReward>
      <SendTokens></SendTokens>
    </div>
  );
};

const MainWithNavBar = WithNavBar(<Main />);

export default MainWithNavBar;
