import React from 'react'
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from '../common/Paginator/Paginator.jsx'

let Users = (props) => {

    return (
        <div className={styles.UsersComponent}>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {
                props.users.map(u => <div key={u.id} className={styles.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
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