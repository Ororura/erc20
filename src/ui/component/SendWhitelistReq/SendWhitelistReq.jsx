import { Button } from "react-bootstrap";
import { sendRequestToWhitelist } from "../../../services/Contract";
import { useContext } from "react";
import { UserContext } from "../../../core/Context";
import Contract from "../../../services/Contract";

const SendWhitelistReq = () => {
  const { userData } = useContext(UserContext);

  const handler = async (e) => {
    e.preventDefault();
    await Contract.sendRequestToWhitelist(userData.wallet);
  };

  return (
    <Button
      style={{ margin: "10px" }}
      onClick={async (e) => {
        await handler(e).then();
      }}
    >
      Отправить запрос на добавление в вайтлист
    </Button>
  );
};

export default SendWhitelistReq;
