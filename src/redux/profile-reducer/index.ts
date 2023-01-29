import { stopSubmit } from 'redux-form';
import { TProfile, TPhotos } from '../../types';
import { profileAPI } from '../../API/api';

import {
  TAddPostAC,
  TDeletePostAC,
  TProfileReducerState,
  TSetPhotoSuccessAC,
  TSetStatusAC,
  TSetUserProfileAC,
  TThunkProfileReducer,
} from './types';

export const ADD_POST = 'profile-reducer/ADD-POST';
export const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';
export const SET_STATUS = 'profile-reducer/SET_STATUS';
export const DELETE_POST = 'profile-reducer/DELETE_POST';
export const GETTING_PHOTO = 'profile-reducer/GETTING_PHOTO';

let initialState: TProfileReducerState = {
  posts: [
    { id: 1, message: "Hi brosky, how's it going?", likes: 2 },
    { id: 2, message: "It's my first post.", likes: 5 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.NewPostBody,
        likes: 2,
      };

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case GETTING_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (NewPostBody: string): TAddPostAC => ({
  type: ADD_POST,
  NewPostBody: NewPostBody,
});
export const setUserProfile = (profile: object): TSetUserProfileAC => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status: string): TSetStatusAC => ({ type: SET_STATUS, status });
export const deletePost = (postId: number): TDeletePostAC => ({
  type: DELETE_POST,
  postId: postId,
});
export const setPhotoSuccess = (photos: TPhotos): TSetPhotoSuccessAC => ({
  type: GETTING_PHOTO,
  photos: photos,
});

export const getUserProfile =
  (userId: number): TThunkProfileReducer =>
  async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };

export const getStatus =
  (userId: number): TThunkProfileReducer =>
  async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };

export const updateStatus =
  (status: string): TThunkProfileReducer =>
  async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

export const getPhoto =
  (file: any): TThunkProfileReducer =>
  async (dispatch) => {
    let response = await profileAPI.getPhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(setPhotoSuccess(response.data.data.photos));
    }
  };

export const saveDataProfile = (profile: TProfile) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.id;
  let response = await profileAPI.saveDataProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('dataEdit', { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
