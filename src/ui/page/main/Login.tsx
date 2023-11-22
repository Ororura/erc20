import React, { useContext, useState } from "react";
import WithNavBar from "../../component/HOC/HOC";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../core/Context";
import { ethBal, signIn } from "../../../services/Contract";
import { useHistory } from "react-router-dom";

interface IDataInput {
  login: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<IDataInput>({ login: "", password: "" });
  const { userData, setUserData } = useContext(UserContext);

  const handleSignIn = async () => {
    try {
      const signInResult = await signIn(data.login, data.password);

      setUserData({
        ...userData,
        login: signInResult[0],
        wallet: signInResult[1],
        seedTokens: signInResult[2],
        privateTokens: signInResult[3],
        publicTokens: signInResult[4],
        whiteList: signInResult[5],
        role: signInResult[6],
      });

      const ethBalance = await ethBal(userData.wallet);

      setUserData({
        ...userData,
        eth: ethBalance,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
                  await handleSignIn().then(() => {
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
