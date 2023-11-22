import { Button } from "react-bootstrap";
import { sendRequestToWhitelist } from "../../../services/Contract";
import { useContext } from "react";
import { UserContext } from "../../../core/Context";

const SendWhitelistReq = () => {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          sendRequestToWhitelist(userData.wallet);
        }}
      >
        Отправить запрос на добавление в вайтлист
      </Button>
    </div>
  );
};

export default SendWhitelistReq;
