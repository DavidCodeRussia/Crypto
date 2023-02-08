import { actions, initialState } from '.';
import { InferActionsTypes } from '../redux-store';

export type InitialStateType = typeof initialState;

export type ActionsTypes = InferActionsTypes<typeof actions>;
