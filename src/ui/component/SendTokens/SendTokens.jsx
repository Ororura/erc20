import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Contract from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const SendTokens = () => {
  const { userData } = useContext(UserContext);
  const [inputData, setInputData] = useState();

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    await Contract.transferToken(inputData.wallet, inputData.amount, inputData.type, userData.wallet).then();
  };

  return (
    <Form style={{ width: "18rem", backgroundColor: "#844dbf", padding: "10px", borderRadius: "10px", margin: "10px" }}>
      <Form.Label>Отправить токены</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "230px" }}>
        <Form.Label>Введите адрес пользователя</Form.Label>
        <Form.Control
          name="wallet"
          onChange={(e) => {
            handlerChange(e);
          }}
        />
        <Form.Label>Введите тип токенов</Form.Label>
        <Form.Control
          name="type"
          onChange={(e) => {
            handlerChange(e);
          }}
        />
        <Form.Label>Введите кол-во токенов</Form.Label>
        <Form.Control
          name="token"
          onChange={(e) => {
            handlerChange(e);
          }}
        />
      </Form.Group>
      <Button
        onClick={async (e) => {
          await handler(e).then();
        }}
      >
        Отправить токены
      </Button>
    </Form>
  );
};

export default SendTokens;
