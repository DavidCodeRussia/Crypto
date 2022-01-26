import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} state={this.props.state}
                     status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
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