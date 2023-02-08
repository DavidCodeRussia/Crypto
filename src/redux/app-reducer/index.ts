import { getAuthUserData } from '../auth-reducer';
import { ActionsTypes, InitialStateType } from './types';

export let initialState = {
  initialized: false,
};

export const actions = {
  initializedSuccess: () => ({ type: 'INITIALIZED_SUCCESS' } as const),
};

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());

  promise.then(() => {
    dispatch(actions.initializedSuccess());
  });
};
