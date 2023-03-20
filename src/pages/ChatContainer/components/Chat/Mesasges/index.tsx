import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../../redux/redux-store";
import Message from "../Mesasge";

const Messages = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {messages !== undefined &&
        messages.map((item: any, index: number) => <Message key={index} message={item} />)}
    </div>
  );
};

export default Messages;
