import React from 'react'
import {connect} from "react-redux";
import Friends from "./Friends";
import {Navigate} from "react-router-dom";

const FriendsContainer = (props) => {

    if(!props.isAuth) return <Navigate replace to="/Login" />
    return (
        <Friends />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(FriendsContainer)