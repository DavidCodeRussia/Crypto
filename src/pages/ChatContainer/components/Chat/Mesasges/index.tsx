import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../../redux/redux-store';
import Message from '../Mesasge';

const Messages = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const newMessageRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setAutoScroll] = useState(true);

  const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const myDiv = e.currentTarget;
    if (Math.abs(myDiv.offsetHeight + myDiv.scrollTop - myDiv.scrollHeight) < 100) {
      setAutoScroll(true);
    } else {
      setAutoScroll(false);
    }
  };

  useEffect(() => {
    if (isAutoScroll) {
      setTimeout(() => {
        newMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [messages]);

  return (
    <div style={{ height: '400px', overflowY: 'auto' }} onScroll={onScrollHandler}>
      {messages !== undefined &&
        messages.map((item: any, index: number) => <Message key={index} message={item} />)}
      <div ref={newMessageRef}></div>
    </div>
  );
};

export default Messages;
