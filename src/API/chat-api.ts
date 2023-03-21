export type TChatMessage = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
export type TEventsNames = "messages-received" | "status-changed";
export type TStatus = "pending" | "ready" | "error";

export type TMessagesReceivedSubscriber = (messages: TChatMessage[]) => void;
export type TStatusChangesSubscriber = (status: TStatus) => void;

const subscribers = {
  "messages-received": [] as TMessagesReceivedSubscriber[],
  "status-changed": [] as TStatusChangesSubscriber[],
};

let ws: WebSocket | null = null;

const openHandler = () => {
  notifySubscribersAboutStatus("ready");
};
const closeHandler = () => {
  notifySubscribersAboutStatus("pending");
  setTimeout(createChannel, 3000);
};
const errorHandler = () => {
  notifySubscribersAboutStatus("error");
  console.error("Перезагрузите страницу");
};
const onMessageHandler = (e: MessageEvent) => {
  let newMessage = JSON.parse(e.data);
  subscribers["messages-received"].forEach((item) => item(newMessage));
};
const cleanUp = () => {
  ws?.removeEventListener("close", closeHandler);
  ws?.removeEventListener("message", onMessageHandler);
  ws?.removeEventListener("open", openHandler);
  ws?.removeEventListener("error", errorHandler);
};
const notifySubscribersAboutStatus = (status: TStatus) => {
  subscribers["status-changed"].forEach((s) => s(status));
};

const createChannel = () => {
  cleanUp();
  ws?.close();
  ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
  notifySubscribersAboutStatus("pending");
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", onMessageHandler);
  ws.addEventListener("open", openHandler);
  ws.addEventListener("error", errorHandler);
};

export const chatAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers["messages-received"] = [];
    subscribers["status-changed"] = [];
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
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
    };
  },
  unsubscribe(
    eventName: TEventsNames,
    callback: TMessagesReceivedSubscriber | TStatusChangesSubscriber,
  ) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
