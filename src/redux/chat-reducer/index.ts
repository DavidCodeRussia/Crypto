import { TChatMessage } from '../../API/chat-api';
import { TActions, TInitialState } from './types';

export const ADD_MESSAGE = 'add';

export let initialState = {
  messages: [] as TChatMessage[],
};

const chatReducer = (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: () => {},
};

export default chatReducer;
