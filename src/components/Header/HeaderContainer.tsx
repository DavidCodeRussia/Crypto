import React from "react";
import HeaderLayout from "./HeaderLayout";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { TMapDispatchToProps, TMapStateToProps } from "./types";

class HeaderContainer extends React.Component {
  render() {
    return <HeaderLayout {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): TMapStateToProps => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, {
  logout,
})(HeaderContainer);
