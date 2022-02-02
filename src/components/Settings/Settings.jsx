import s from './Settings.module.css';
import {Navigate} from "react-router-dom";
import React from "react";

const SettingsContainer = (props) => {
    if(!props.isAuth) return <Navigate replace to="/Login" />
    return (
        <div className={s.SettingsFeed}>Settings</div>
    )
}

export default SettingsContainer;