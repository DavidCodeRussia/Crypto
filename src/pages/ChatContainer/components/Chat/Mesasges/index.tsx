import React, { useEffect, useState } from 'react';
import { TMessage } from '../../../types';
import Message from '../Mesasge';
import { TMessages } from './types';

const Messages: React.FC<TMessages> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    const onMessageHandler = (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data);
      setMessages((prevState) => [...prevState, ...newMessage]);
    };
    wsChannel?.addEventListener('message', onMessageHandler);

    return () => wsChannel?.removeEventListener('message', onMessageHandler);
  }, [wsChannel]);

  return (
    <div style={{ height: '400px', overflowY: 'auto' }}>
      {messages !== undefined &&
        messages.map((item: any, index: number) => <Message key={index} message={item} />)}
    </div>
  );
};

export default Messages;
