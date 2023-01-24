import { TDialogsReducerState } from "./types";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState: TDialogsReducerState = {
  dialogsData: [
    { id: 1, name: "Misha" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Vanya" },
    { id: 4, name: "Magomed" },
    { id: 5, name: "Katysha" },
    { id: 6, name: "Eduard" },
    { id: 7, name: "Sergey" },
  ],
  messages: [
    { id: 1, message: "Hello Katya" },
    { id: 2, message: "Hi Andrey" },
    { id: 3, message: "How is it going?" },
    { id: 4, message: "Nice and you?" },
  ],
};

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: action.newMessageBody }],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody: string) => ({
  type: ADD_MESSAGE,
  newMessageBody: newMessageBody,
});

export default dialogsReducer;
