import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {updateNewPostText} from "../../redux/state";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} likes={p.likes} /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.MyPosts}>
            My Posts
            <div className={s.post}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.post}>
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts;