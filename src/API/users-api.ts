import { TPhotos } from "../types";
import { instance, APIResponseType } from "./api";

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

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number, term: string) {
    console.log("currentPage", currentPage);
    console.log("pageSize", pageSize);
    console.log("term", term);
    const response = await instance.get<TUsers>(
      `users?page=${currentPage}&count=${pageSize}&term=${term}`,
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
