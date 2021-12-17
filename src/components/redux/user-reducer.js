import React from 'react'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: true, name: 'Dmitri', status: 'I am fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, followed: false, name: 'Pasha', status: 'I am okey', location: {city: 'Kirov', country: 'Ukraine'}},
        {id: 3, followed: true, name: 'Katya', status: 'I not good', location: {city: 'Novosibirsk', country: 'Russia'}}
    ]
}

const userReducer = (state = initialState, action) => {
    return {
        switch(action.type) {
            case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

            case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                })
            }

            default:
                return state;
        }
    }
}

export const followAC () => ({ type: FOLLOW, userId })
export const unfollowAC () => ({ type: UNFOLLOW, userId })

export default userReducer