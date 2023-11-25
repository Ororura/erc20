import { Button, Form } from "react-bootstrap";
import WithNavBar from "../../component/HOC/Header";
import React, { useState } from "react";
import Contract from "../../../services/Contract";
import { useHistory } from "react-router-dom";

const Reg = () => {
  const [inputData, setInputData] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
      try {
        await Contract.signUp(inputData.login, inputData.login, inputData.wallet);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
  };


  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "auto" }}>
          <p className="text-center font-weight-bold h3">Регистрация</p>
          <Form style={{ width: "400px", margin: "auto" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Кошелек</Form.Label>
              <Form.Control
                name="wallet"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Введите ваш кошелек"
              />
              <Form.Label>Логин</Form.Label>
              <Form.Control
                name="login"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Введите логин"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="password"
                placeholder="Введите пароль"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={async (e) => {
                await handler(e)
              }}
            >
              Войти
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

const WithNavBarReg = WithNavBar(<Reg />);

export default WithNavBarReg;
