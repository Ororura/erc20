import React from "react";
import UserInfo from "../../component/UserInfo/UserInfo";
import WithNavBar from "../../component/HOC/HOC";
import "bootstrap/dist/css/bootstrap.css";
import BuyTokens from "../../component/BuyTokens/BuyTokens";
import Timers from "../../component/Timers/Timers";
import Whitelist from "../../component/Whitelist/Whitelist";
import GetUserbal from "../../component/GetUserBal/GetUserbal";
import ApproveWhitelist from "../../component/ApproveWhitelist/ApproveWhitelist";
const Main = () => {
  return (
    <div>
      <Timers></Timers>
      <UserInfo></UserInfo>
      <Whitelist></Whitelist>
      <BuyTokens></BuyTokens>
      <GetUserbal></GetUserbal>
      <ApproveWhitelist></ApproveWhitelist>
    </div>
  );
};

const MainWithNavBar = WithNavBar(<Main />);

export default MainWithNavBar;
