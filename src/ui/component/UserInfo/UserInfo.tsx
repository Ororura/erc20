import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../../core/Context";

const UserInfo = () => {
  const { userData } = useContext(UserContext);
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
    <div className="wrapper">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Ваши данные</Card.Title>
          <Card.Text>Адрес: {userData.wallet}</Card.Text>
          <Card.Text>Роль: {role}</Card.Text>
          <Card.Text>Подготовительный баланс: {userData.seedTokens}</Card.Text>
          <Card.Text>Приватный баланс: {userData.privateTokens}</Card.Text>
          <Card.Text>Публичный баланс: {userData.publicTokens}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserInfo;
