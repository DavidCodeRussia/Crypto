import { INITIALIZED_SUCCESS } from "./index";

export type TActionsAppReducer = TInitializedSuccesAC; // when some actions creators will appear. Add here them for typizate actions in auth-reducer

export type TAppReducerState = {
  initialized: boolean;
};

export type TInitializedSuccesAC = {
  type: typeof INITIALIZED_SUCCESS;
};
