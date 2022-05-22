import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.imgMini}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"} />
            </div>
            <div className={s.post}>{props.message}</div>
            <div className={s.likes}>
                    <span>likes: </span>
                    {props.likes}
            </div>
        </div>

    )
}

export default Post;