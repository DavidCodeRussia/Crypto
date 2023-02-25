/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  savePhoto,
  getStatus,
  getUserProfile,
  saveDataProfile,
  updateStatus,
} from '../../redux/profile-reducer';
import { withAuthNavigate } from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';
import { TPropsPC } from './types';

import Profile from './components/Profile';

let ProfileContainer: React.FC<TPropsPC> = (props) => {
  const match = useMatch('/profile/:userId');
  let userId = match ? match.params.userId : props.authorizedUserId;

  useEffect(() => {
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [userId]);

  return (
    <Profile
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      authorizedUserId={props.authorizedUserId}
      match={match}
      getPhoto={props.getPhoto}
      saveDataProfile={props.saveDataProfile}
    />
  );
};

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveDataProfile }),
  withAuthNavigate,
)(ProfileContainer);
