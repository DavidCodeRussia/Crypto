import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
        {id: 2, message: 'It\'s my first post', likes: 5}
    ]

    return (
        <div className={s.MyPosts}>
            My Posts
            <div className={s.post}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                <Post message={postsData[0].message} likes={postsData[0].likes} />
                <Post message={postsData[1].message} likes={postsData[1].likes} />
            </div>
        </div>

    )
}

export default MyPosts;