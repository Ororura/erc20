import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Contract from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const GetUserbal = () => {
  const [inputData, setInputData] = useState();
  const { userData } = useContext(UserContext);
  const [user, setUserData] = useState([]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    Contract.getUserData(inputData.wallet, userData.wallet).then((e) => {
      setUserData(e);
    });
  };

  return (
    <div>
      Узнать токены пользователя
      <Form
        style={{ width: "18rem", backgroundColor: "#844dbf", margin: "10px", padding: "10px", borderRadius: "10px" }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Введите адрес пользователя</Form.Label>
          <Form.Control
            name="wallet"
            onChange={(e) => {
              handlerChange(e);
            }}
          />
        </Form.Group>
        <Button
          onClick={async (e) => {
            await handler(e).await();
          }}
        >
          Получить данные
        </Button>
      </Form>
      <Card style={{ width: "18rem", backgroundColor: "#844dbf", margin: "10px" }}>
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
