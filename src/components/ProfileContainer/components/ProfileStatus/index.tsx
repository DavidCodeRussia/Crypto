import React, { useEffect, useState } from "react";
import { TProfileStatusProps } from "./types";
import s from "./ProfileStatus.module.scss";

const ProfileStatus: React.FC<TProfileStatusProps> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <div className={s.name}>{props.fullName}</div>
      {!editMode && (
        <div className={s.wrapperStatus}>
          <span className={s.status} onClick={activateMode}>
            {props.status || ""}
          </span>
        </div>
      )}
      {editMode && !props.match && (
        <div>
          <input
            onChange={onStatusChange}
            value={status}
            onBlur={deactivateMode}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
