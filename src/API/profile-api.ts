import { instance, APIResponseType } from './api';
import { TPhotos, TProfile } from '../types';

export type TProfileId = {
  userId: number;
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
  fieldsErrors: string[];
};

export type TSavePhotoResponse = {
  photos: TPhotos;
};

export const profileAPI = {
  async getProfile(userId: number) {
    const res = await instance.get<TProfileId>(`profile/` + userId);
    return res.data;
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put<APIResponseType>(`profile/status`, { status: status });
  },
  savePhoto(photo: File) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put<APIResponseType<TSavePhotoResponse>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveDataProfile(profile: TProfile) {
    return instance.put<TSaveDataProfile>('profile', profile);
  },
};
