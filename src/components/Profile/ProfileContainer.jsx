import React, {useEffect} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";


let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match ? props.match.params.userId : props.authorizedUserId;
        debugger
        props.getUserProfile(userId)
        props.getStatus(userId)
    })

        return (
            <Profile {...props} profile={props.profile} state={props.state}
                     status={props.status} updateStatus={props.updateStatus} />
        )
}

const ProfileURLMath = (props) => {

    const match = useMatch('/profile/:userId')
    return <ProfileContainer {...props} match={match} />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthNavigate
    )(ProfileURLMath)