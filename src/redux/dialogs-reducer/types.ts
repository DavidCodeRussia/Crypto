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
