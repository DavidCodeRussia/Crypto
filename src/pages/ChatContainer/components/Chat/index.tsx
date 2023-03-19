import React, { useEffect, useState } from 'react';
import AddMessage from './AddMessage';
import Messages from './Mesasges';

let Chat = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      setTimeout(createChannel, 3000);
    };
    const createChannel = () => {
      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
      ws.addEventListener('close', closeHandler);
      setWsChannel(ws);
    };
    createChannel();

    return () => {
      ws.removeEventListener('close', closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessage wsChannel={wsChannel} />
    </div>
  );
};

export default Chat;
