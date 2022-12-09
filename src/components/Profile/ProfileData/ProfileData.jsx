import React from "react";

import s from "../ProfileInfo/ProfileInfo.module.scss";

const ProfileData = (props) => {
  let Contact = ({ ContactTitle, ContactValue }) => {
    return (
      <div className={s.contacts}>
        {ContactTitle} {ContactValue}
      </div>
    );
  };

  return (
    <div className={s.information}>
      <div className={s.block1}>
        <div>
          <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
          <b>Description:</b> {props.profile.lookingForAJobDescription}
        </div>
        <div>
          <b>About me: </b>
          {props.profile.aboutMe}
        </div>

        <div>
          <b>Contacts:</b>
          {Object.keys(props.profile.contacts).map((key) => {
            return <Contact key={key} ContactTitle={key} ContactValue={props.profile.contacts[key]} />;
          })}
        </div>
      </div>
      {!props.match && (
        <div className={s.block2}>
          <div>
            <button
              className={s.information_buttonEdit}
              onClick={() => {
                props.toEditMode(true);
              }}
            >
              edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileData;
