import { TPhotos } from "../types";

export enum EResultCode {
  Success = 0,
  Error = 1,
}

export enum EResultCodeCaptcha {
  CaptchaIsRequired = 10,
}

export type TGetPhoto = {
  image: File;
};

export type TAuthData = {
  id: number;
  email: string;
  login: string;
};

export type TAuthMe = {
  data: TAuthData;
  resultCode: EResultCode | EResultCodeCaptcha;
  messages: string[];
  fieldsErrors: string[];
};

export type TUser = {
  followed: boolean;
  id: number;
  name: string;
  photos: TPhotos;
  status: string;
  uniqueUrlName: string;
};

export type TUsers = {
  error: string;
  items: TUser[];
  totalCount: number;
};

export type TProfileId = {
  userId: number;
};

export type TCaptcha = {
  url: string;
};

export type TAuthLogin = {
  resultCode: number;
  messages: string[];
  data: {
    userId: number;
  };
};

export type TAuthLogout = {
  resultCode: number;
  messages: string[];
  data: Object;
};

export type TUsersUnfollowFollow = {
  resultCode: number;
  messages: string[];
  data: Object;
};

export type TProfileStatusPut = {
  resultCode: number;
  messages: string[];
  data: Object;
};

export type TUploadPhoto = {
  data: {
    photos: TPhotos;
  };
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
};

export type TSaveDataProfile = {
  resultCode: number;
  messages: string[];
  data: Object;
};
