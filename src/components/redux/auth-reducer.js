import {authAPI, captchaAPI} from '../../API/api';
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'
const GET_CAPTCHA = 'auth-reducer/GET_CAPTCHA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
}

export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA,
    payload: {email, id, login, isAuth} })

export const getCaptcha = (captcha) => ({type: GET_CAPTCHA, payload: {captcha}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
        let {email, id, login} = response.data
        dispatch(setAuthUserData(email, id, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaSuccess())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaSuccess = () => async (dispatch) => {
    const response = await captchaAPI.getCaptcha()
    let captcha = response.data.url
    dispatch(getCaptcha(captcha))
}

export default authReducer