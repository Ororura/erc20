import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../core/Context";
import Contract from "../../../services/Contract";

const SendReward = () => {
  const { userData } = useContext(UserContext);
  const [inputData, setInputData] = useState();

  const handlerChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    await Contract.giveReward(inputData.wallet, inputData.token, userData.wallet);
  };

  return (
    <Form style={{ width: "18rem", backgroundColor: "#844dbf", padding: "10px", borderRadius: "10px", margin: "10px" }}>
      <Form.Label>Отправить награду</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "230px" }}>
        <Form.Label>Введите адрес пользователя</Form.Label>
        <Form.Control
          name="wallet"
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
          await handler(e);
        }}
      >
        Отправить токены
      </Button>
    </Form>
  );
};

export default SendReward;
