import WithNavBar from "../../component/HOC/Header";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../core/Context";
import Contract from "../../../services/Contract";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

const Login = () => {
  const [data, setData] = useState();
  const { userData, setUser } = useContext(UserContext);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    const result = await Contract.signIn(data.login, data.password);
    if (result) {
      setUser(result);
      console.log(userData);
      history.push("/");
    }
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
                await handler(e).then();
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
