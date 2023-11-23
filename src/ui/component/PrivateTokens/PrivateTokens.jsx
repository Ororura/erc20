import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { getUserPrivateTokens } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const PrivateTokens = () => {
  const [wallet, setWallet] = useState("");
  const { userData } = useContext(UserContext);
  const [publicBal, setPublicBal] = useState("");
  return (
    <div style={{ width: "18rem", backgroundColor: "#844dbf", padding:"10px",borderRadius:"10px" , margin:"10px"}}>
      <Form.Label>Узнать приватные токены пользователя</Form.Label>
      <Form>
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
        </Form.Group>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            try {
              getUserPrivateTokens(wallet, userData.wallet).then((e) => {
                setPublicBal(e);
              });
            } catch (error) {
              console.log(error);
            }
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
