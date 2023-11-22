import { Button, Form } from "react-bootstrap";
import WithNavBar from "../../component/HOC/HOC";
import React from "react";

const Reg = () => {
    
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "auto" }}>
          <p className="text-center font-weight-bold h3">Регистрация</p>
          <Form style={{width: "400px", margin:"auto"}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
                <Form.Control type="password" placeholder="Введите повторно пароль" />
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

const WithNavBarReg = WithNavBar(<Reg />);

export default WithNavBarReg;
