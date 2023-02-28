import React from "react";
import AddMessage from "./AddMessage";
import Messages from "./Mesasges";

let Chat = () => {
  const wsChannel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessage wsChannel={wsChannel} />
    </div>
  );
};

export default Chat;
