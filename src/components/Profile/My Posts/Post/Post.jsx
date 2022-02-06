import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.imgMini}>
                <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
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