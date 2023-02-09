import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

type TMapState = {
  
}

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

export function withAuthNavigate<WCP>(Component: React.ComponentType<WCP>) {
  function NavigateComponent(props: WCP) => {    
      if (!props.isAuth) return <Navigate replace to="/login" />
      
      return <Component {...this.props} />;    
  }

  let ConnectedAuthNavigateComponent = connect(mapStateToProps)(NavigateComponent);

  return ConnectedAuthNavigateComponent;
};
