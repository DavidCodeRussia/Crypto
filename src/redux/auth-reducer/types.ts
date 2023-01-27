import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux-store";
import { SET_USER_DATA, GET_CAPTCHA } from "./index";

export type TAuthReducerState = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string | null;
};

export type TActionsAuthReducer = TSetAuthUserDataAC | TGetCaptchaSuccessAC; // when some actions creators will appear. Add here them for typizate actions in auth-reducer

export type TThunkAuthReducer = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  TActionsAuthReducer
>;

export type TUserDataPayload = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type TSetAuthUserDataAC = {
  type: typeof SET_USER_DATA;
  payload: TUserDataPayload;
};

export type TGetCaptchaSuccessAC = {
  type: typeof GET_CAPTCHA;
  payload: { captcha: string };
};
