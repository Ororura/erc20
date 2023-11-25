import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Contract from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const PrivateTokens = () => {
  const [inputData, setInputData] = useState();
  const { userData } = useContext(UserContext);
  const [publicBal, setPublicBal] = useState();

  const handlerChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    Contract.getUserPrivateTokens(inputData.wallet, userData.wallet).then((e) => {
      setPublicBal(e);
    });
  };

  return (
    <div style={{ width: "18rem", backgroundColor: "#844dbf", padding: "10px", borderRadius: "10px", margin: "10px" }}>
      <Form.Label>Узнать приватные токены пользователя</Form.Label>
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
          onClick={async (e) => {
            handler(e).then();
          }}
        >
          Получить данные
        </Button>
      </Form>
      <Card>
        <Card.Body>
          <Card.Text>Приватный баланс: {publicBal} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrivateTokens;
