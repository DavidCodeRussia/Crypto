import { getAuthUserData } from "../auth-reducer";

import { TAppReducerState, TInitializedSuccesAC, TActionsAppReducer } from "./types";

export const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState: TAppReducerState = {
  initialized: false,
};

export const appReducer = (state = initialState, action: TActionsAppReducer): TAppReducerState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = (): TInitializedSuccesAC => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());

  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
