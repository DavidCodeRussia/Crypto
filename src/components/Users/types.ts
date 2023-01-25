import { TUser } from "../../redux/users-reducer/types";

export type TMapStateToProps = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalItemsCount: number;
  users: TUser[];
  followingInProgress: number[];
};

export type TMapDisptachToProps = {
  follow: () => void;
  unfollow: () => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  onPage: (pageNumber: number, pageSize: number) => void;
};

export type TOwnProps = {
  pageTitle: string;
};

export type TPropsType = TMapStateToProps & TMapDisptachToProps & TOwnProps;

export type TUsersContainerProps = {
  pageTitle: string;
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalItemsCount: number;
  users: TUser[];
  followingInProgress: number[];

  follow: () => void;
  unfollow: () => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  onPage: (pageNumber: number, pageSize: number) => void;
};

export type TUsersProps = {
  pageTitle: string;
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: Array<TUser>;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};
