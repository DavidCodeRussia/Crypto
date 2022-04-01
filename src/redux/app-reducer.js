import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    //dispatch(someThingElse()) к примеру у нас там ещё 2 диспатча. А так можно было бы просто записать promise.then(...)
    //dispatch(someThingElse()) что так что так можно
    Promise.all([promise])
        .then( () => {
        dispatch(initializedSuccess())
    } )
}