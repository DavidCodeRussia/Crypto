import axios from "axios";
import { TProfile } from "../types";
import {
  TAuthLogin,
  TAuthLogout,
  TAuthMe,
  TCaptcha,
  TProfileId,
  TProfileStatusPut,
  TSaveDataProfile,
  TUploadPhoto,
  TUsers,
  TUsersUnfollowFollow,
} from "./types";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "cd664a4b-8ae4-4329-af11-adaeaf1df86b",
  },
});

export const authAPI = {
  me() {
    return instance.get<TAuthMe>(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email: string, password: string, rememberMe = false, captcha = "") {
    return instance.post<TAuthLogin>(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete<TAuthLogout>(`auth/login`);
  },
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<TUsers>(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId: number) {
    return instance.delete<TUsersUnfollowFollow>(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId: number) {
    return instance.post<TUsersUnfollowFollow>(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<TProfileId>(`profile/` + userId);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put<TProfileStatusPut>(`profile/status`, { status: status });
  },
  getPhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put<TUploadPhoto>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveDataProfile(profile: TProfile) {
    return instance.put<TSaveDataProfile>("profile", profile);
  },
};

export const captchaAPI = {
  getCaptcha() {
    return instance.get<TCaptcha>(`security/get-captcha-url`);
  },
};
