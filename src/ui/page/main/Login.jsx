import WithNavBar from "../../component/HOC/HOC";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../core/Context";
import { ethBal, signIn } from "../../../services/Contract";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

const Login = () => {
  const [data, setData] = useState({ login: "", password: "" });
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const handleChange = (e) => {
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
                  await signIn(data.login, data.password).then(async (e) => {
                    await ethBal(e[1]).then((el) => {
                      setUserData({
                        ...userData,
                        login: e[0],
                        wallet: e[1],
                        seedTokens: e[2] / 10 ** 12,
                        privateTokens: e[3] / 10 ** 12,
                        publicTokens: e[4] / 10 ** 12,
                        whiteList: e[5] / 10 ** 12,
                        role: e[6],
                        eth: el / 10 ** 18,
                      });
                    });
                  });

                  history.push("/");
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
