import React, { useEffect, useState } from "react";
import { TMessage } from "../../../types";
import Message from "../Mesasge";

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  const wsChannel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");

  useEffect(() => {
    wsChannel.addEventListener("message", (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data);
      setMessages([...messages, ...newMessage]);
    });
  }, []);

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {messages !== undefined &&
        messages.map((item: any, index: number) => <Message key={index} message={item} />)}
    </div>
  );
};

export default Messages;
