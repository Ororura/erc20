import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getLifeTime } from "../../../services/Contract";

const Timers = () => {
  const [timer, setTimer] = useState<string>("");
  useEffect(() => {
    (async () => {
      await getLifeTime().then((e) => {
        setTimer(e);
      });
    })();
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Таймеры</Card.Title>
          <Card.Text>Время жизни: {timer}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Timers;
