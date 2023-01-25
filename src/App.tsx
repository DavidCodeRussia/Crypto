import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { initializeApp } from "./redux/app-reducer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/preloader/Preloader";
import FriendsContainer from "./components/Fiends";
import NewsContainer from "./components/News";
import SettingsContainer from "./components/Settings";

import "./App.scss";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer.jsx")); // Ленивая загрузка
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.jsx")); // Lazy download
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"));

let App = (props: any) => {
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<HeaderContainer />}>
            <Route path="/" element={<NewsContainer />} />
            <Route path="/Profile/*" element={<ProfileContainer />} />
            <Route path="/Dialogs/*" element={<DialogsContainer />} />
            <Route path="/Friends/*" element={<FriendsContainer />} />
            <Route path="/Users/*" element={<UsersContainer pageTitle="Hello world123" />} />
            <Route path="/News/*" element={<NewsContainer />} />
            <Route path="/Settings/*" element={<SettingsContainer />} />
            <Route path="/Login/*" element={<Login />} />
            <Route path="*" element={<Navigate to="/Profile" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
