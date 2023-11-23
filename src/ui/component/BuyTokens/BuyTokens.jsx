import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { buyToken } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const BuyTokens = () => {
  const [amount, setAmount] = useState(0);
  const [ether, setEther] = useState("");
  const { userData } = useContext(UserContext);
  return (
      <Form style={{ borderRadius:"10px", padding:"10px", width: "18rem", backgroundColor: "#844dbf", margin:"10px"}}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: "230px" }}
        >
          <Form.Label>Купить токены</Form.Label>
          <Form.Control
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            type="number"
            placeholder="Введите кол-во токенов"
          />
          <Form.Control
            onChange={(e) => {
              setEther(e.target.value);
            }}
            type="number"
            placeholder="Введите кол-во эфира"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            buyToken(amount, ether, userData.wallet);
          }}
        >
          Купить
        </Button>
      </Form>
  );
};

export default BuyTokens;
