import { PathMatch } from 'react-router-dom';
import { TContacts, TProfile } from '../../types';
import { TPost } from '../../types';

// Below types for component: ProfileContainer

export type TPCMapStateToProps = {
  profile: TProfile;
  status: string;
  authorizedUserId: number;
  isAuth: boolean;
};

export type TPCMapDispatchToProps = {
  getUserProfile: (userId: string | number | undefined) => void;
  getStatus: (serId: string | number | undefined) => void;
  updateStatus: () => void;
  savePhoto: () => void;
  saveDataProfile: (formData: TProfileDataEditRFFormData) => Promise<void>;
  getPhoto: () => void;
};

export type TPropsPC = TPCMapStateToProps & TPCMapDispatchToProps;

// Below types for component: Profile

export type TProfileProps = {
  authorizedUserId: number;
  match: PathMatch<'userId'> | null;
  profile: TProfile;
  status: string;

  getPhoto: () => void;
  saveDataProfile: (formData: TProfileDataEditRFFormData) => Promise<void>;
  updateStatus: () => void;
};

// Below types for component: MyPostsContainer

export type TMPCMapState = {
  posts: TPost[];
  newPostText: string;
};

export type TMPCMapDispatch = {
  addPost: (NewPostBody: string) => void;
};

export type TContainerDataPost = {
  profile: TProfile;
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
  match: PathMatch<'userId'> | null;
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
  // error: string;
  handleSubmit: (formData: TProfileDataEditRFFormData) => void;
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
  match: PathMatch<'userId'> | null;
  profile: TProfile;
  status: string;

  getPhoto: (targetFiles: Object) => void; // должно быть функцией я думаю
  saveDataProfile: (formData: TProfileDataEditRFFormData) => Promise<void>;
  updateStatus: () => void;
};
