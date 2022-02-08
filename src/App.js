import React, {Component, useEffect} from 'react'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./components/redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import NewsContainer from "./components/News/News";
import SettingsContainer from "./components/Settings/Settings";
import FriendsContainer from "./components/Fiends/Friends";

let App = (props) => {

    useEffect(() => {
        props.initializeApp()
    })

    if (!props.initialized) {
        return <Preloader/>
    }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Nav/>
                    <div className="forBackColor">
                        <Routes>
                            <Route path="/Profile/*" element={<ProfileContainer/>}/>
                            <Route path="/Dialogs/*" element={<DialogsContainer/>}/>
                            <Route path='/Friends/*' element={<FriendsContainer />}/>
                            <Route path='/Users/*' element={<UsersContainer/>}/>
                            <Route path='/News/*' element={<NewsContainer/>}/>
                            <Route path='/Settings/*' element={<SettingsContainer/>}/>
                            <Route path='/Login/*' element={<LoginPage/>}/>
                        </Routes>
                    </div>
                </div>

                <Footer/>
            </div>
        )

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)



