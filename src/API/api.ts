import axios from 'axios';
import { TProfile } from '../types';
import { TAuthMe } from './types';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'cd664a4b-8ae4-4329-af11-adaeaf1df86b',
  },
});

export const authAPI = {
  me() {
    return instance.get<TAuthMe>(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email: string, password: string, rememberMe = false, captcha = '') {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  getPhoto(photo: any) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveDataProfile(profile: TProfile) {
    return instance.put('profile', profile);
  },
};

export const captchaAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`);
  },
};
