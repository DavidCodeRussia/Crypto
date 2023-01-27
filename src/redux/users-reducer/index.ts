import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../../API/api";
import { AppStateType } from "../redux-store";
import {
  TActionsUsersReducers,
  TFollowSuccessAC,
  TSetCurrentPageAC,
  TSetTotalItemsCountAC,
  TSetUsersAC,
  TToggleFollowingProgressAC,
  TToggleIsFetchingAC,
  TUnFollowSuccessAC,
  TUser,
  TUsersReducerState,
} from "./types";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_ITEMS_COUNT = "SET_TOTAL_ITEMS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState: TUsersReducerState = {
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action: TActionsUsersReducers) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_ITEMS_COUNT:
      return {
        ...state,
        totalItemsCount: action.totalItemsCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId: number): TFollowSuccessAC => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId: number): TUnFollowSuccessAC => ({ type: UNFOLLOW, userId });
export const setUsers = (users: TUser[]): TSetUsersAC => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage: number): TSetCurrentPageAC => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalItemsCount = (totalItemsCount: number): TSetTotalItemsCountAC => ({
  type: SET_TOTAL_ITEMS_COUNT,
  totalItemsCount: totalItemsCount,
});
export const toggleIsFetching = (isFetching: boolean): TToggleIsFetchingAC => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number,
): TToggleFollowingProgressAC => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: isFetching,
  userId,
});

type GetStateType = () => AppStateType; // first
type DispatchType = Dispatch<TActionsUsersReducers>;

export const requestUsers = (page: number, pageSize: number) => {
  // first method of typizate thunk
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalItemsCount(data.totalCount));
  };
};

export const onPage = (
  pageNumber: number,
  pageSize: number,
): ThunkAction<Promise<void>, AppStateType, unknown, TActionsUsersReducers> => {
  // second method of typizate thunk
  // pageNumber - номер текущей страницы, props.pageSize - кол-во юзеров 5 или 10

  return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  };
};

export const unfollow = (
  userId: number,
): ThunkAction<Promise<void>, AppStateType, unknown, TActionsUsersReducers> => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await usersAPI.unfollow(userId);

    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export const follow = (
  userId: number,
): ThunkAction<Promise<void>, AppStateType, unknown, TActionsUsersReducers> => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await usersAPI.follow(userId);

    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
