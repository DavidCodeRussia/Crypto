import { usersAPI } from '../../API/users-api';
import { TUser, ThunkType, ActionsTypes, TInitialState } from './types';

export let initialState = {
  users: [] as TUser[],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
};

const usersReducer = (state = initialState, action: ActionsTypes): TInitialState => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SET_TOTAL_ITEMS_COUNT':
      return {
        ...state,
        totalItemsCount: action.totalItemsCount,
      };
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

export const actions = {
  followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
  setUsers: (users: TUser[]) => ({ type: 'SET_USERS', users: users } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage: currentPage,
    } as const),
  setTotalItemsCount: (totalItemsCount: number) =>
    ({
      type: 'SET_TOTAL_ITEMS_COUNT',
      totalItemsCount: totalItemsCount,
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching: isFetching,
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching: isFetching,
      userId,
    } as const),
};

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  // first method of typizate thunk
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalItemsCount(data.totalCount));
  };
};

export const onPage = (pageNumber: number, pageSize: number): ThunkType => {
  // second method of typizate thunk
  // pageNumber - номер текущей страницы, props.pageSize - кол-во юзеров 5 или 10

  return async (dispatch) => {
    dispatch(actions.setCurrentPage(pageNumber));
    dispatch(actions.toggleIsFetching(true));

    let data = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await usersAPI.unfollow(userId);

    if (data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
  };
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await usersAPI.follow(userId);

    if (data.resultCode === 0) {
      dispatch(actions.followSuccess(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
