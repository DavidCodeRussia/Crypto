import { initialState, actions } from "./index";
import { BaseThunkType, InferActionsTypes } from "../redux-store";

export type TInitialState = typeof initialState;
export type TActions = InferActionsTypes<typeof actions>;
