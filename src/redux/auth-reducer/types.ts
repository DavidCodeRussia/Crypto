import { SET_USER_DATA, GET_CAPTCHA } from "./index";

export type TAuthReducerState = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string | null;
};

export type TUserDataPayload = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type TSetAuthUserDataAction = {
  type: typeof SET_USER_DATA;
  payload: TUserDataPayload;
};

export type TGetCaptchaSuccess = {
  type: typeof GET_CAPTCHA;
  payload: { captcha: string };
};
