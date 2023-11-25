import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Contract from "../../../services/Contract";

const Timers = () => {
  const [timer, setTimer] = useState(0);
  const [privateTimer, setPrivateTimer] = useState(900)

  useEffect(() => {
    const fetchData = async () => {
      const e = await Contract.getLifeTime();
      setTimer(Number(e));
      setPrivateTimer(Number(e));
      
    };
  
    fetchData();

    let secondInterval;

    if (timer >= 600 & timer <= 1500) {
       secondInterval = setInterval(() => {
        setPrivateTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  
    const firstInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(firstInterval)
      clearInterval(secondInterval)};
  
  }, []);

  return (
    <Card style={{ width: "18rem", backgroundColor: "#844dbf", margin: "10px" }}>
      <Card.Body>
        <Card.Title>Таймеры</Card.Title>
        <Card.Text>Время жизни: {timer}</Card.Text>

          {timer < 900 ?  <Card.Text>Время приватной фазы: {privateTimer}</Card.Text> : <p>Приватная фаза закончилась</p>}
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
