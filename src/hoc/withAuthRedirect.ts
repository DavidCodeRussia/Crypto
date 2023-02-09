import React from 'react';
import { redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

type TMapState = {
  isAuth: boolean;
};

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

export function withAuthNavigate<WCP>(Component: React.ComponentType<WCP>) {
  function NavigateComponent(props: WCP & TMapState) {
    const { isAuth, ...restProps } = props;
    if (!props.isAuth) return redirect('/login');

    return <Component {...(restProps as WCP)} />;
  }

  let ConnectedAuthNavigateComponent = connect(mapStateToProps)(NavigateComponent);

  return ConnectedAuthNavigateComponent;
}
