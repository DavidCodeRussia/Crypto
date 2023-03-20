import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listenMessages, stopListenMessages } from "../../../../redux/chat-reducer";
import AddMessage from "./AddMessage";
import Messages from "./Mesasges";

let Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listenMessages());

    return () => {
      dispatch(stopListenMessages());
    };
  }, []);

  return (
    <div>
      <Messages />
      <AddMessage />
    </div>
  );
};

export default Chat;
