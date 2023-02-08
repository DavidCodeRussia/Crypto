import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'cd664a4b-8ae4-4329-af11-adaeaf1df86b',
  },
});

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

export type TCaptcha = {
  url: string;
};

export type TAuthLogout = {
  resultCode: number;
  messages: string[];
  data: Object;
};

export type APIResponseType<D = {}, RC = EResultCode> = {
  data: D;
  messages: string[];
  resultCode: RC;
};
