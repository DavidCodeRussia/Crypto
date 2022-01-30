import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Navigate} from "react-router-dom";
import React from "react";


const Profile = (props) => {
    if(!props.isAuth) return <Navigate replace to="/Login" />

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;