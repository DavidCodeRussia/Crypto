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
import { TFilter } from "../../redux/users-reducer/types";

import Users from "./components/Users";
import Preloader from "../common/Preloader";

let UsersContainer: React.FC<TUsersContainerProps> = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize, "", "");
  }, [props.currentPage, props.pageSize]);

  let onPageChanged = (pageNumber: number) => {
    props.onPage(pageNumber, props.pageSize);
  };

  let onFilterChanged = (filter: TFilter) => {
    props.getUsers(props.currentPage, props.pageSize, filter.term, filter.friend);
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
        onFilterChanged={onFilterChanged}
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
