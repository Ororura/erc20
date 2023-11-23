import { Button, Form } from "react-bootstrap";
import WithNavBar from "../../component/HOC/HOC";
import React, { useState } from "react";

const Reg = () => {
  const [data, setData] = useState({ login: "", password: "", rePassword: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const checkPassword = (password, rePassword) => {
    return password === rePassword;
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "auto" }}>
          <p className="text-center font-weight-bold h3">Регистрация</p>
          <Form style={{ width: "400px", margin: "auto" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
              <Form.Control
                name="rePassword"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="password"
                placeholder="Введите повторно пароль"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(checkPassword(data.password, data.rePassword));
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
