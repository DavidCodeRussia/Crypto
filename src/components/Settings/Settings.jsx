import s from './Settings.module.css';
import React from "react";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";

const SettingsContainer = (props) => {

    return (
        <div className={s.SettingsFeed}>Settings</div>
    )
}

export default withAuthNavigate(SettingsContainer);