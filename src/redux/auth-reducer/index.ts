import { stopSubmit } from "redux-form";

import { authAPI, captchaAPI } from "../../API/api";
import {
  TAuthReducerState,
  TGetCaptchaSuccessAC,
  TSetAuthUserDataAC,
  TActionsAuthReducer,
  TThunkAuthReducer,
} from "./types";

export const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
export const GET_CAPTCHA = "auth-reducer/GET_CAPTCHA";

let initialState: TAuthReducerState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action: TActionsAuthReducer): TAuthReducerState => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (
  email: string | null,
  id: number | null,
  login: string | null,
  isAuth: boolean,
): TSetAuthUserDataAC => ({
  type: SET_USER_DATA,
  payload: { email, id, login, isAuth },
});

export const getCaptchaSuccess = (captcha: string): TGetCaptchaSuccessAC => ({
  type: GET_CAPTCHA,
  payload: { captcha },
});

export const getAuthUserData = (): TThunkAuthReducer => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { email, id, login } = response.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logout = (): TThunkAuthReducer => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptcha = (): TThunkAuthReducer => async (dispatch: any) => {
  const response = await captchaAPI.getCaptcha();
  let captcha = response.data.url;

  dispatch(getCaptchaSuccess(captcha));
};

export default authReducer;
