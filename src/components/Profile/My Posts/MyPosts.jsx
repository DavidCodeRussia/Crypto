import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} likes={p.likes} /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch( {type: 'ADD-POST'} )
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = { type: 'UPDATE-NEW-POST-TEXT', text: text }
        props.dispatch(action)
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