import { stopSubmit } from 'redux-form';

import { authAPI } from '../../API/auth-api';
import { captchaAPI } from '../../API/captha-api';
import { TActions, TInitialState, TThunkAuthReducer } from './types';
import { EResultCode, EResultCodeCaptcha } from '../../API/api';

export let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: null as string | null,
};

const authReducer = (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case 'auth-reducer/SET_USER_DATA':
    case 'auth-reducer/GET_CAPTCHA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) =>
    ({
      type: 'auth-reducer/SET_USER_DATA',
      payload: { email, userId, login, isAuth },
    } as const),

  getCaptchaSuccess: (captcha: string) =>
    ({
      type: 'auth-reducer/GET_CAPTCHA',
      payload: { captcha },
    } as const),
};

export const getAuthUserData = (): TThunkAuthReducer => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === EResultCode.Success) {
    let { email, id, login } = response.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string): TThunkAuthReducer =>
  async (dispatch) => {
    console.log('данные приходящие в thunk');
    console.log(
      'email: ',
      email,
      'password: ',
      password,
      'rememberMe: ',
      rememberMe,
      'captcha:',
      captcha,
    );
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === EResultCode.Success) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === EResultCodeCaptcha.CaptchaIsRequired) {
        dispatch(getCaptcha());
      }
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };

export const logout = (): TThunkAuthReducer => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === EResultCode.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export const getCaptcha = (): TThunkAuthReducer => async (dispatch) => {
  const response = await captchaAPI.getCaptcha();
  let captcha = response.data.url;

  dispatch(actions.getCaptchaSuccess(captcha));
};

export default authReducer;
