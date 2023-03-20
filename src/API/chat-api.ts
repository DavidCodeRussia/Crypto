export type TChatMessage = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
export type TEventsNames = 'messages-received' | 'status-changed';
export type TStatus = 'pending' | 'ready';

export type TMessagesReceivedSubscriber = (messages: TChatMessage[]) => void;
export type TStatusChangesSubscriber = (status: TStatus) => void;
const subscribers = {
  'messages-received': [] as TMessagesReceivedSubscriber[],
  'status-changed': [] as TMessagesReceivedSubscriber[],
};

let ws: WebSocket | null = null;

const closeHandler = () => {
  console.log('WS closed');
  setTimeout(createChannel, 3000);
};
const onMessageHandler = (e: MessageEvent) => {
  let newMessage = JSON.parse(e.data);
  subscribers['messages-received'].forEach((item) => item(newMessage));
};
const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.removeEventListener('message', onMessageHandler);
};

const createChannel = () => {
  cleanUp();
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  ws.addEventListener('close', closeHandler);
  ws.addEventListener('message', onMessageHandler);
};

export const chatAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers['messages-received'] = [];
    subscribers['status-changed'] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(
    eventName: TEventsNames,
    callback: TMessagesReceivedSubscriber | TStatusChangesSubscriber,
  ) {
    // @ts-ignore
    subscribers[eventName].push(callback);

    return () => {
      subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
    };
  },
  unsubscribe(eventName: TEventsNames, callback: TMessagesReceivedSubscriber) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
