/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { follow, requestUsers, onPage, unfollow } from "../../redux/users-reducer";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalItemsCount,
  getUsers,
} from "../../redux/users-selectors";
import { withAuthNavigate } from "../../hoc/withAuthRedirect";
import { TMapStateToProps, TUsersContainerProps } from "./types";
import { AppStateType } from "../../redux/redux-store";
import { somethingNew } from "../../App";

import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

let UsersContainer: React.FC<TUsersContainerProps> = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [props.currentPage, props.pageSize]);

  let onPageChanged = (pageNumber: number) => {
    props.onPage(pageNumber, props.pageSize); // pageNumber - номер текущей страницы, props.pageSize - кол-во юзеров 5 или 10
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        pageTitle={props.pageTitle}
        users={props.users}
        pageSize={props.pageSize}
        totalItemsCount={props.totalItemsCount}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        follow={props.follow}
        unfollow={props.unfollow}
        followingInProgress={props.followingInProgress}
      />
    </>
  );
};

let mapStateToProps = (state: AppStateType): TMapStateToProps => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  // TStateProps, TOwnProps, State = DefaultRootState
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers: requestUsers,
    onPage,
    somethingNew,
  }), // в mapDispatchToProps лежат action creator
  withAuthNavigate,
)(UsersContainer);
