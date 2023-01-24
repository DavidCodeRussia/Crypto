import { INITIALIZED_SUCCESS } from "./index";

export type TAppReducerState = {
  initialized: boolean;
};

export type TInitializedSuccesAction = {
  type: typeof INITIALIZED_SUCCESS;
};
