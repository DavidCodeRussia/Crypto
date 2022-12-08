import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { initializeApp } from "./redux/app-reducer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/preloader/Preloader";
import FriendsContainer from "./components/Fiends/Friends";
import NewsContainer from "./components/News/News";
import SettingsContainer from "./components/Settings/Settings";

import "./App.css";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer.jsx")
); // Ленивая загрузка
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer.jsx")
); // Lazy download
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer.jsx")
);

let App = (props) => {
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="app-content">
        <div className="app-wrapper-content">
          <Nav />
          <div className="main_content">
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/Profile/*" element={<ProfileContainer />} />
                <Route path="/Dialogs/*" element={<DialogsContainer />} />
                <Route path="/Friends/*" element={<FriendsContainer />} />
                <Route path="/Users/*" element={<UsersContainer />} />
                <Route path="/News/*" element={<NewsContainer />} />
                <Route path="/Settings/*" element={<SettingsContainer />} />
                <Route path="/Login/*" element={<Login />} />
                <Route path="*" element={<Navigate to="/Profile" replace />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
