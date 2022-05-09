import React from "react"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";
import LoginReduxForm from "./LoginReduxForm";

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
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {login} )(Login)
