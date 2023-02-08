import { instance } from './api';
import { TCaptcha } from './api';

export const captchaAPI = {
  getCaptcha() {
    return instance.get<TCaptcha>(`security/get-captcha-url`);
  },
};
