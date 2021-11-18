import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
        {id: 2, message: 'It\'s my first post', likes: 5}
    ]

    let postsElements = posts.map( p => <Post message={p.message} likes={p.likes} /> );

    return (
        <div className={s.MyPosts}>
            My Posts
            <div className={s.post}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts;