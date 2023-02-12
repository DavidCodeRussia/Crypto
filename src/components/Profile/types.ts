import { SetStateAction } from 'react';
import { Dispatch } from 'redux';
import { TContacts, TProfile } from '../../types';
import { TPost } from '../../types';

// Below types for component: ProfileContainer

export type TMapStateToProps = {
  profile: TProfile;
  status: string;
  authorizedUserId: number;
  isAuth: boolean;
};

export type TMapDispatchToProps = {
  getUserProfile: (userId: string | number | null) => void;
  getStatus: (serId: string | number | null) => void;
  updateStatus: () => void;
  savePhoto: () => void;
  saveDataProfile: () => void;
  getPhoto: () => void;
};

export type TPropsProfileContainer = TMapStateToProps & TMapDispatchToProps;

export type TProfileUrl = {
  match: {
    params: {
      userId: string | null;
    };
  };
};

// Below types for component: MyPosts

export type TPostFormData = {
  NewPostBody: string;
};

export type TPostFormOwnProps = {};

export type TFuncAddPostProps = {
  NewPostBody: string;
};

export type TMyPosts = {
  newPostText: string;
  posts: TPost[];
  profile: TProfile;

  addPost: (TFuncAddPostProps: string) => void;
};

// Below types for component: Post

export type TPostProps = {
  likes: number;
  message: string;
  profile: TProfile;
};

// Below types for component: ProfileData

export type TProfileData = {
  match: { params: { userId: string | null } };
  profile: TProfile;

  toEditMode: (bool: boolean) => void;
};
export type TContact = {
  ContactTitle: string;
  ContactValue: string;
};

// Below types for component: ProfileDataEditRF

export type TProfileDataEditRF = {
  profile: TProfile;
  error: string;
  handleSubmit: () => void;
  toEditMode: (active: boolean) => any;
};

export type TProfileDataEditRFFormData = {
  aboutMe: string;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: TContacts;
};

// Below types for component: ProfileInfo

export type TProfileInfo = {
  authorizedUserId: number;
  match: {
    params: {
      userId: string | null;
    };
  };
  profile: TProfile;
  status: string;

  getPhoto: (targetFiles: Object) => void; // должно быть функцией я думаю
  saveDataProfile: (formData: TProfileDataEditRFFormData) => Promise<void>;
  updateStatus: () => void;
};
