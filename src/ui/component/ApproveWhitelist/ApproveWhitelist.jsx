import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../core/Context";
import Contract from "../../../services/Contract";

const ApproveWhitelist = () => {
  const { userData } = useContext(UserContext);
  const [inputData, setInputData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handler = async (e) => {
    e.preventDefault();
    await Contract.takeWhitelistRequest(inputData.id, inputData.status, userData.wallet);
  };

  return (
    <div>
      <Form
        style={{ width: "18rem", borderRadius: "10px", backgroundColor: "#844dbf", margin: "10px", padding: "10px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Введите айди запроса</Form.Label>
          <Form.Control
            name="id"
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            placeholder="Введите айди"
          />
        </Form.Group>
        <Form.Select
          name="status"
          onChange={(e) => {
            handleChange(e);
          }}
          aria-label="Default select example"
        >
          <option>Выберите решение</option>
          <option value="true">Разрешить</option>
          <option value="false">Отклонить</option>
        </Form.Select>
        <Button
          variant="primary"
          type="submit"
          onClick={async (e) => {
            await handler(e).then();
          }}
        >
          Отправить
        </Button>
      </Form>
    </div>
  );
};

export default ApproveWhitelist;
