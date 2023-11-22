import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { giveReward } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const SendReward = () => {
  const [wallet, setWallet] = useState<string>("");
  const { userData } = useContext(UserContext);
  const [amount, setAmount] = useState("");
  return (
    <div>
      <Form>
        <Form.Label>Отправить награду</Form.Label>
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
              giveReward(wallet, amount, userData.wallet);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Отправить токены
        </Button>
      </Form>
    </div>
  );
};

export default SendReward;
