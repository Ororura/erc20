import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { transferToken } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const SendTokens = () => {
  const [wallet, setWallet] = useState("");
  const { userData } = useContext(UserContext);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  return (
      <Form style={{ width: "18rem", backgroundColor: "#844dbf", padding:"10px",borderRadius:"10px" , margin:"10px"}}>
        <Form.Label>Отправить токены</Form.Label>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: "230px" }}
        >
          <Form.Label>Введите адрес пользователя</Form.Label>
          <Form.Control
            onChange={(e) => {
              setWallet(e.target.value);
            }}
          />
          <Form.Label>Введите тип токенов</Form.Label>
          <Form.Control
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <Form.Label>Введите кол-во токенов</Form.Label>
          <Form.Control
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            try {
              transferToken(wallet, amount, type, userData.wallet);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Отправить токены
        </Button>
      </Form>
  );
};

export default SendTokens;
