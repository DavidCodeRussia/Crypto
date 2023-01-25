import { ADD_POST, DELETE_POST, GETTING_PHOTO, SET_STATUS, SET_USER_PROFILE } from "./index";
import { TPosts, TPhotos } from "../../types";

export type TProfileReducerState = {
  posts: TPosts[];
  profile: object | null;
  status: string;
};

export type TAddPostAC = {
  type: typeof ADD_POST;
  NewPostBody: string;
};

export type TSetUserProfileAC = {
  type: typeof SET_USER_PROFILE;
  profile: object;
};

export type TSetStatusAC = {
  type: typeof SET_STATUS;
  status: string;
};

export type TDeletePostAC = {
  type: typeof DELETE_POST;
  postId: number;
};

export type TSetPhotoSuccessAC = {
  type: typeof GETTING_PHOTO;
  photos: TPhotos;
};
