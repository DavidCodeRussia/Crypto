import { TProfile } from "../../types";

export type TMapStateToProps = {
  profile: TProfile;
  status: string;
  authorizedUserId: number;
  isAuth: boolean;
};

export type TMapDispatchToProps = {};

export type TAddPost = {
  NewPostBody: string;
};
