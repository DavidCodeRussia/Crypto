import { TPhotos } from '../types';
import { parseQueryParams } from '../utils';
import { instance, APIResponseType } from './api';

export type TUser = {
  followed: boolean;
  id: number;
  name: string;
  photos: TPhotos;
  status: string;
};

export type TUsers = {
  error: string;
  items: TUser[];
  totalCount: number;
};

type TGetUsersParameters = {
  currentPage: number;
  pageSize: number;
  term: string;
};

export const usersAPI = {
  async getUsers(data: TGetUsersParameters) {
    const { currentPage = 1, pageSize = 10, ...params } = data;
    const query = data ? parseQueryParams(params) : '';

    const response = await instance.get<TUsers>(
      // `users?${query}&page=${currentPage.currentPage}&count=${pageSize}`,
      `users?page=1&count=5`,
    );
    return response.data;
  },
  async unfollow(userId: number) {
    // return instance.delete(`follow/${userId}`).then((res) => res.data) as Promise<APIResponseType>; // оба варианта рабочие

    const response = await instance.delete<APIResponseType>(`follow/${userId}`);
    return response.data;
  },
  async follow(userId: number) {
    const response = await instance.post<APIResponseType>(`follow/${userId}`);
    return response.data;
  },
};
