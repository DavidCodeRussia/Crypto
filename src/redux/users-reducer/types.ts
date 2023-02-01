import { TPhotos } from '../../types';
import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_ITEMS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from './index';

export type TUser = {
  name: string;
  id: number;
  photos: TPhotos;
  status: string;
  followed: boolean;
};

export type TUsersReducerState = {
  users: TUser[];
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

export type ActionsType = {};
