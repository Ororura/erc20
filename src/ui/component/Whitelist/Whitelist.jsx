import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { getWhitelist } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";


const Whitelist = () => {
  const [data, setWhitelistData] = useState([]);
  const { userData } = useContext(UserContext);
  return (
    <div style={{margin: "10px"}}>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          try {
            await getWhitelist(userData.wallet).then((e) => {
              setWhitelistData(e);
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Получить вайтлист
      </Button>
      <ListGroup style={{backgroundColor: "#844dbf"}}>
        {data.map((e, idx) => (
          <ListGroup.Item key={idx} style={{ width: "420px" }}>
            {e.wallet}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Whitelist;
