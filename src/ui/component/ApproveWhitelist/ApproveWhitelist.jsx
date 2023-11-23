import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { takeWhitelistRequest } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";

const ApproveWhitelist = () => {
  const { userData } = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  return (
    <div>
      <Form style={{ width: "18rem", borderRadius: "10px", backgroundColor: "#844dbf", margin:"10px", padding: "10px"}}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Введите айди запроса</Form.Label>
          <Form.Control
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="text"
            placeholder="Введите айди"
          />
        </Form.Group>
        <Form.Select
          onChange={(e) => {
            setStatus(e.target.value);
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
          onClick={(e) => {
            e.preventDefault();
            takeWhitelistRequest(id, status, userData.wallet);
          }}
        >
          Отправить
        </Button>
      </Form>
    </div>
  );
};

export default ApproveWhitelist;
