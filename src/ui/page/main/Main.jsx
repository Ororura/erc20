import React, { useContext, useEffect } from "react";
import WithNavBar from "../../component/HOC/Header";
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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card } from "react-bootstrap";

const Main = () => {
  const { userData, balance, getBalance } = useContext(UserContext);
  const navigation = useHistory();
  useEffect(() => {
    getBalance()
    if (userData.login === "") {
      navigation.push("/login");
    }
  }, []);

  let role;
  switch (userData.role) {
    case "0":
      role = "Пользователь";
      break;
    case "2":
      role = "Приватный провайдер";
      break;
    case "1":
      role = "Публичный провайдер";
      break;
    case "3":
      role = "Владелец";
      break;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Timers />
      <Card style={{ width: "18rem", backgroundColor: "#844dbf", margin: "10px" }}>
        <Card.Body>
          <Card.Title>Ваши данные</Card.Title>
          <Card.Text>Адрес: {userData.wallet}</Card.Text>
          <Card.Text>Роль: {role}</Card.Text>
          <Card.Text>Баланс эфира: {balance.eth / 10 ** 18}</Card.Text>
          <Card.Text>Подготовительный баланс: {balance.seedTokens / 10 ** 12}</Card.Text>
          <Card.Text>Приватный баланс: {balance.privateTokens / 10 ** 12}</Card.Text>
          <Card.Text>Публичный баланс: {balance.publicTokens / 10 ** 12}</Card.Text>
        </Card.Body>
      </Card>
      <SendWhitelistReq />
      <Whitelist />
      <ApproveWhitelist />
      <BuyTokens />
      <GetUserbal />
      <PrivateTokens />
      <PublicTokens />
      <SendReward />
      <SendTokens />
    </div>
  );
};

const MainWithNavBar = WithNavBar(<Main />);

export default MainWithNavBar;
