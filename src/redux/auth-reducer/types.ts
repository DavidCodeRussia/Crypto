import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from '../redux-store';
import { actions, initialState } from './index';

export type TInitialState = typeof initialState;
export type TActions = InferActionsTypes<typeof actions>;
export type TThunkAuthReducer = BaseThunkType<TActions | ReturnType<typeof stopSubmit>>;
