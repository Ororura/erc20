import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Contract from "../../../services/Contract";

const Timers = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    (async () => {
      await Contract.getLifeTime().then((e) => {
        setTimer(Number(e));
      });
    })();
  }, []);

  return (
    <Card style={{ width: "18rem", backgroundColor: "#844dbf", margin: "10px" }}>
      <Card.Body>
        <Card.Title>Таймеры</Card.Title>
        <Card.Text>Время жизни: {timer}</Card.Text>
        {timer > 300 && timer < 900 ? (
          <Card.Text>Время приватной фазы: {timer}</Card.Text>
        ) : (
          <p>Приватная фаза закончилась или не началась</p>
        )}
        {timer > 900 ? (
          <Card.Text>Время свободной продажи: {timer - 900}</Card.Text>
        ) : (
          <p>Свободная продажа ещё не началась</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default Timers;
