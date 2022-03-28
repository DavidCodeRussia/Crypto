import React from 'react'
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import Paginator from '../common/Paginator/Paginator.jsx'

let Users = (props) => {

    return (
        <div className={s.UsersComponent}>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"}
                                     className={s.userPhoto} />
                            </NavLink>
                        </div>
                        <div className={s.buttonFollowUnfollow}>
                            { u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => { props.unfollow(u.id) }}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => { props.follow(u.id) }}>
                                    Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>Name: {u.name}</div>
                            <div>Status: {u.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users