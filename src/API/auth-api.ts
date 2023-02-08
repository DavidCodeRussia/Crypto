import { EResultCode, EResultCodeCaptcha, instance, APIResponseType } from './api';
import { TAuthLogout } from './api';

export type TAuthResponse = {
  id: number;
  email: string;
  login: string;
};

export type TLoginResponse = {
  userId: number;
};

export const authAPI = {
  async me() {
    const response = await instance.get<APIResponseType<TAuthResponse, EResultCode>>(`auth/me`);
    return response.data;
  },
  login(email: string, password: string, rememberMe = false, captcha = '') {
    return instance.post<APIResponseType<TLoginResponse, EResultCode | EResultCodeCaptcha>>(
      `auth/login`,
      {
        email,
        password,
        rememberMe,
        captcha,
      },
    );
  },
  logout() {
    return instance.delete<TAuthLogout>(`auth/login`);
  },
};
