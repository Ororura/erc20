import React, { useContext, useState } from "react";
import WithNavBar from "../../component/HOC/HOC";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../core/Context";
import { signIn } from "../../../services/Contract";
import { useHistory } from "react-router-dom";

interface IDataInput {
  login: string;
  password: string;
}

interface IUserData {
  whitelist: boolean;
  login: string;
  role: string;
  wallet: string;
  seedBal: string;
  privateBal: string;
  publicBal: string;
}

const Login = () => {
  const [data, setData] = useState<IDataInput>({ login: "", password: "" });
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "auto" }}>
          <p className="text-center font-weight-bold h3">Авторизация</p>
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
                type="text"
                placeholder="Введите пароль"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                try {
                  await signIn(data.login, data.password, "0xcB3a5467756F86692FB3336c58EC41c16B9BEBdF").then((e) => {
                    setUserData({
                      login: e[0],
                      wallet: e[1],
                      seedTokens: e[2],
                      privateTokens: e[3],
                      publicTokens: e[4],
                      whiteList: e[5],
                      role: e[6],
                    });
                    console.log(userData);
                    history.push("/");
                  });
                } catch (error) {
                  console.log(error);
                }
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

const WithNavBarLogin = WithNavBar(<Login />);

export default WithNavBarLogin;
