import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Contract from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const BuyTokens = () => {
  const [inputData, setInputData] = useState();
  const { userData } = useContext(UserContext);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    await Contract.BuyTokens(inputData.token, inputData.eth, userData.wallet);
  };

  return (
    <Form style={{ borderRadius: "10px", padding: "10px", width: "18rem", backgroundColor: "#844dbf", margin: "10px" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "230px" }}>
        <Form.Label>Купить токены</Form.Label>
        <Form.Control
          name="token"
          onChange={(e) => {
            handlerChange(e);
          }}
          type="number"
          placeholder="Введите кол-во токенов"
        />
        <Form.Control
          name="eth"
          onChange={(e) => {
            handlerChange(e);
          }}
          type="number"
          placeholder="Введите кол-во эфира"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={async (e) => {
          await handler(e).then();
        }}
      >
        Купить
      </Button>
    </Form>
  );
};

export default BuyTokens;
