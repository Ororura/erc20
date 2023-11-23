import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { getUserData } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const GetUserbal = () => {
  const [wallet, setWallet] = useState("");
  const { userData } = useContext(UserContext);
  const [user, setUserData] = useState([]);
  return (
    <div>
      Узнать токены пользователя
      <Form style={{ width: "18rem", backgroundColor: "#844dbf", margin:"10px", padding: "10px", borderRadius: "10px"}}>
        <Form.Group  controlId="formBasicEmail" >
          <Form.Label>Введите адрес пользователя</Form.Label>
          <Form.Control
            onChange={(e) => {
              setWallet(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            try {
              getUserData(wallet, userData.wallet).then((e) => {
                setUserData(e);
                console.log(user);
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Получить данные
        </Button>
      </Form>
      <Card style={{ width: "18rem", backgroundColor: "#844dbf", margin:"10px"}}>
        <Card.Body>
          <Card.Title>Данные:</Card.Title>
          <Card.Text>Подготовительный баланс: {user[2]}</Card.Text>
          <Card.Text> Приватный баланс: {user[3]} </Card.Text>
          <Card.Text>Публичный баланс: {user[4]} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GetUserbal;
