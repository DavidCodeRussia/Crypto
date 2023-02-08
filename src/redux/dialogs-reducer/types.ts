import { BaseThunkType, InferActionsTypes } from '../redux-store';
import { actions, initialState } from './index';

export type TInitialState = typeof initialState;
export type TActions = InferActionsTypes<typeof actions>;
export type TThunkDialogsReducer = BaseThunkType<TActions>;
