import React from 'react'
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../redux/profile-reducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    debugger

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let action = updateNewPostTextActionCreator()
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;