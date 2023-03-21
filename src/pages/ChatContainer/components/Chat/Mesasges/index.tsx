import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../../redux/redux-store";
import Message from "../Mesasge";

const Messages = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const newMessageRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setAutoScroll] = useState(true);

  const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    console.log("e", e);
  };

  useEffect(() => {
    if (isAutoScroll) {
      newMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div style={{ height: "400px", overflowY: "auto" }} onScroll={onScrollHandler}>
      {messages !== undefined &&
        messages.map((item: any, index: number) => <Message key={index} message={item} />)}
      <div ref={newMessageRef}></div>
    </div>
  );
};

export default Messages;
