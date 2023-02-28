import React from "react";
import { TMessage } from "../../../types";

const Message: React.FC<{ message: TMessage; wsChannel: WebSocket }> = ({ message, wsChannel }) => {
  return (
    <div>
      <img src={message?.photo} alt="" style={{ width: "30px", borderRadius: "3px" }} />
      <b>{message?.userName}</b>
      <br />
      {message?.message}
      <hr />
    </div>
  );
};

export default Message;
