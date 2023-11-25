import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { getWhitelist } from "../../../services/Contract";
import { UserContext } from "../../../core/Context";
import Contract from "../../../services/Contract";

const Whitelist = () => {
  const [whiteListData, setWhitelistData] = useState([]);
  const { userData } = useContext(UserContext);

  const handler = async (e) => {
    e.preventDefault();
    try {
      await Contract.getWhitelist(userData.wallet).then((e) => {
        setWhitelistData(e);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button
        onClick={async (e) => {
          handler(e);
        }}
      >
        Получить вайтлист
      </Button>
      <ListGroup style={{ backgroundColor: "#844dbf" }}>
        {whiteListData.map((e, idx) => (
          <ListGroup.Item key={idx} style={{ width: "420px" }}>
            {e.wallet}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Whitelist;
