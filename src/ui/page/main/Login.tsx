import React, { useState } from "react";
import WithNavBar from "../../component/HOC/HOC";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [login, setLogin] = useState<string>("");
  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setLogin(value)
  }
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "auto" }}>
          <p className="text-center font-weight-bold h3">Авторизация</p>
          <Form style={{ width: "400px", margin: "auto" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Логин</Form.Label>
              <Form.Control type="text" placeholder="Введите логин" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Войти
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

const WithNavBarLogin = WithNavBar(<Login />);

export default WithNavBarLogin;
