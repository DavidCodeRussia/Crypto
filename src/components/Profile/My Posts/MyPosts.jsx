import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div className={s.post}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi brosky, how's it going?" likes="2" />
                <Post message="It's my first post" likes="5" />
            </div>
        </div>

    )
}

export default MyPosts;