import { TPhotos } from "../../types";
import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_ITEMS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from "./index";

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

export type TFollowSuccessAC = {
  type: typeof FOLLOW;
  userId: number;
};

export type TUnFollowSuccessAC = {
  type: typeof UNFOLLOW;
  userId: number;
};

export type TSetUsersAC = {
  type: typeof SET_USERS;
  users: TUser[];
};

export type TSetCurrentPageAC = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export type TSetTotalItemsCountAC = {
  type: typeof SET_TOTAL_ITEMS_COUNT;
  totalItemsCount: number;
};

export type TToggleIsFetchingAC = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export type TToggleFollowingProgressAC = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};

export type ActionsType = {};
