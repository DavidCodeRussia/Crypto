export type TChatMessage = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export type TSubscriber = (messages: TChatMessage[]) => void;

const subscribers = [] as TSubscriber[];

let ws: WebSocket;
const closeHandler = () => {
  setTimeout(createChannel, 3000);
};
const createChannel = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  ws.addEventListener('close', closeHandler);
};

const onMessageHandler = (e: MessageEvent) => {
  let newMessage = JSON.parse(e.data);
  setMessages((prevState) => [...prevState, ...newMessage]);
};

export const chatAPI = {
  subscribe(callback: TSubscriber) {
    subscribers.push(callback);
  },
};
