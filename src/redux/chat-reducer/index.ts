import { Dispatch } from "redux";
import { chatAPI, TChatMessage } from "../../API/chat-api";
import { ThunkType } from "../users-reducer/types";
import { TActions, TInitialState } from "./types";
import { TStatus } from "../../API/chat-api";

export const ADD_MESSAGE = "add";

export let initialState = {
  messages: [] as TChatMessage[],
  status: "pending" as TStatus,
};

const chatReducer = (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case "chat-reducer/MESSAGES_RECEIVED":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    case "chat-reducer/STATUS_CHANGED":
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: TChatMessage[]) =>
    ({
      type: "chat-reducer/MESSAGES_RECEIVED",
      payload: { messages },
    } as const),
  statusChanged: (status: TStatus) =>
    ({
      type: "chat-reducer/STATUS_CHANGED",
      payload: { status },
    } as const),
};

let _newMessagesHandler: ((messages: TChatMessage[]) => void) | null = null;
const newMessagesHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessagesHandler === null) {
    _newMessagesHandler = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
  }

  return _newMessagesHandler;
};

let _newStatusHandler: ((status: TStatus) => void) | null = null;
let newStatusHandlerCreator = (dispatch: Dispatch) => {
  if (_newStatusHandler === null) {
    _newStatusHandler = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _newStatusHandler;
};

export const listenMessages = (): ThunkType => async (dispatch) => {
  chatAPI.start();
  chatAPI.subscribe("messages-received", newMessagesHandlerCreator(dispatch));
  chatAPI.subscribe("status-changed", newStatusHandlerCreator(dispatch));
};

export const stopListenMessages = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe("messages-received", newMessagesHandlerCreator(dispatch));
  chatAPI.unsubscribe("status-changed", newStatusHandlerCreator(dispatch));
  chatAPI.stop();
};

export const sendMessage =
  (message: string): ThunkType =>
  async (dispatch) => {
    chatAPI.sendMessage(message);
  };

export default chatReducer;
