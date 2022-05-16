import React, {useEffect} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getPhoto, getStatus, getUserProfile, saveDataProfile, updateStatus} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";


let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match ? props.match.params.userId : props.authorizedUserId;

        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])

        return (
            <Profile profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId}
                     match={props.match} getPhoto={props.getPhoto} saveDataProfile={props.saveDataProfile} />
        )
}

const ProfileURLMath = (props) => {
    const match = useMatch('/profile/:userId')
    return <ProfileContainer {...props} match={match} />
}

let mapStateToProps = (state) => {

    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth

    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getPhoto, saveDataProfile}),
    withAuthNavigate
    )(ProfileURLMath)