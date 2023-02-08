import { actions, initialState } from '.';
import { TPhotos } from '../../types';
import { BaseThunkType, InferActionsTypes } from '../redux-store';

export type TUser = {
  name: string;
  id: number;
  photos: TPhotos;
  status: string;
  followed: boolean;
};

export type TInitialState = typeof initialState;
export type ActionsTypes = InferActionsTypes<typeof actions>;
export type ThunkType = BaseThunkType<ActionsTypes>;
