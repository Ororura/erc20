import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Contract from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const PublicTokens = () => {
  const [wallet, setWallet] = useState();
  const { userData } = useContext(UserContext);
  const [publicBal, setPublicBal] = useState();
  const [inputData, setInputData] = useState();

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = (e) => {
    e.preventDefault();
    Contract.getUserPublicTokens(inputData.wallet, userData.wallet).then((e) => {
      setPublicBal(e);
    });
  };

  return (
    <div style={{ width: "18rem", backgroundColor: "#844dbf", padding: "10px", borderRadius: "10px", margin: "10px" }}>
      <Form.Label>Узнать публичные токены пользователя</Form.Label>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "230px" }}>
          <Form.Label>Введите адрес пользователя</Form.Label>
          <Form.Control
            name="wallet"
            onChange={(e) => {
              handlerChange(e);
            }}
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            handler(e);
          }}
        >
          Получить данные
        </Button>
      </Form>
      <Card>
        <Card.Body>
          <Card.Text>Публичный баланс: {publicBal} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PublicTokens;
