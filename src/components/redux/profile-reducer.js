import {profileAPI, usersAPI} from "../../API/api";

const ADD_POST = 'profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';
const SET_STATUS = 'profile-reducer/SET_STATUS';
const DELETE_POST = 'profile-reducer/DELETE_POST';
const GETTING_PHOTO = 'profile-reducer/GETTING_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
        {id: 2, message: 'It\'s my first post.', likes: 5}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: action.NewPostBody,
                likes: 2
            }

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case GETTING_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (NewPostBody) => ({type: ADD_POST, NewPostBody: NewPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId})
export const setPhotoSuccess = (photos) => ({type: GETTING_PHOTO, photos: photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const getPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.getPhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer