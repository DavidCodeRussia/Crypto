import { ADD_MESSAGE } from "./index";

export type TDialogsConversation = {
  id: number;
  name: string;
};

export type TDialogsData = {
  id: number;
  message: string;
};

export type TDialogsReducerState = {
  dialogsData: TDialogsConversation[];
  messages: TDialogsData[];
};

export type TAddMessageAC = {
  type: typeof ADD_MESSAGE;
  newMessageBody: string;
};
