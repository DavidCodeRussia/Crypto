import React from "react";

import { NavLink } from "react-router-dom";

import { defaultAvatar } from "../../constants/constants";
import { TUsersProps } from "./types";

import Paginator from "../common/Paginator";
import WrapperForMain from "../common/WrapperForMain";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import s from "./Users.module.scss";

let Users: React.FC<TUsersProps> = (props) => {
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
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : defaultAvatar}
                  className={s.userPhoto}
                  alt="default user avatar"
                />
              </NavLink>
              <div className={s.buttonFollowUnfollow}>
                {u.followed ? (
                  <Stack>
                    <Button
                      disabled={props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                      type="submit"
                      variant="contained">
                      Unfollow
                    </Button>
                  </Stack>
                ) : (
                  <Stack>
                    <Button
                      disabled={props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        props.follow(u.id);
                      }}
                      type="submit"
                      variant="contained">
                      Follow
                    </Button>
                  </Stack>
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
