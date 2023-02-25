/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as queryString from 'querystring';
import { useNavigate, useLocation } from 'react-router-dom';

import { follow, requestUsers, onPage, unfollow } from '../../redux/users-reducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalItemsCount,
  getUsers,
  getFilter,
} from '../../redux/users-selectors';
import { withAuthNavigate } from '../../hoc/withAuthRedirect';
import { TMapStateToProps, TParsed, TUsersContainerProps } from './types';
import { AppStateType } from '../../redux/redux-store';
import { somethingNew } from '../../App';
import { TFilter } from '../../redux/users-reducer/types';

import Users from './components/Users';
import Preloader from '../common/Preloader';

let UsersContainer: React.FC<TUsersContainerProps> = ({
  currentPage,
  pageSize,
  isFetching,
  totalItemsCount,
  users,
  followingInProgress,
  filter,
  follow,
  unfollow,
  getUsers,
  onPage,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.pathname.substring(7)) as TParsed;

    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.currentPage) actualPage = +parsed.currentPage;

    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term };

    if (!!parsed.friend)
      actualFilter = {
        ...actualFilter,
        friend: parsed.friend === 'true' ? true : parsed.friend === 'false' ? false : '',
      };

    getUsers(actualPage, pageSize, actualFilter.term, actualFilter.friend);
  }, []);

  useEffect(() => {
    const query: TParsed = {};
    if (!!filter.term) query.term = filter.term;
    if (!!filter.friend) query.friend = String(filter.friend);
    if (currentPage !== 1) query.currentPage = String(currentPage);

    navigate(queryString.stringify(query));
  }, [filter, currentPage]);

  let onPageChanged = (pageNumber: number) => {
    onPage(pageNumber, pageSize);
  };

  let onFilterChanged = (filter: TFilter) => {
    getUsers(currentPage, pageSize, filter.term, filter.friend);
  };

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        pageSize={pageSize}
        totalItemsCount={totalItemsCount}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        onFilterChanged={onFilterChanged}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
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
    filter: getFilter(state),
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
