import React from "react";

import { NavLink } from "react-router-dom";

import Paginator from "../common/Paginator/Paginator.jsx";
import WrapperForMain from "@components/common/WrapperForMain";

import s from "./Users.module.scss";

let Users = (props) => {
  return (
    <WrapperForMain>
      <div className={s.UsersComponent}>
        <Paginator
          totalItemsCount={props.totalItemsCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
        />
        {props.users.map((u) => (
          <div key={u.id} className={s.user}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                    }
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>
              <div className={s.buttonFollowUnfollow}>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>Name: {u.name}</div>
                <div>Status: {u.status}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </WrapperForMain>
  );
};

export default Users;
