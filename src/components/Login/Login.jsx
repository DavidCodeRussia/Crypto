import React from "react"
import {connect} from "react-redux";
import { Navigate } from "react-router-dom";

import {login} from "../../redux/auth-reducer";
import LoginReduxForm from "./LoginReduxForm";

import s from "../common/FormsControls/FormsControls.module.css";


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return <div className={s.form}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
        <div>
            Don't have account yet ? Click here to <a href="https://social-network.samuraijs.com/signUp" className={s.button_sign_up}>Sign Up</a>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {login} )(Login)
