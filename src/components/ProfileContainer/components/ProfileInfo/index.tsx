import React, { ChangeEvent, useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Preloader from '../../../common/Preloader';
import ProfileStatus from '../ProfileStatus';
import ProfileDataEditRF from '../ProfileDataEditRF';
import ProfileData from '../ProfileData/ProfileData';

import { TProfileDataEditRFFormData, TProfileInfo } from '../../types';
import s from './ProfileInfo.module.scss';

const ProfileInfo: React.FC<TProfileInfo> = (props) => {
  let [editMode, toEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  let getPhotoFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      props.getPhoto(event.target.files[0]);
    }
  };

  let onSubmit = (formData: TProfileDataEditRFFormData) => {
    // remove then ! - _ -

    props.saveDataProfile(formData).then(() => {
      toEditMode(false);
    });
  };

  return (
    <div className={s.profile}>
      <div className={s.avatar}>
        <img
          src={
            props.profile.photos.large ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
          }
          alt="default user avatar"
        />
      </div>

      {!props.match && (
        <Stack className={s.uploadBtn} direction="row" alignItems="center" spacing={2}>
          <Button onChange={() => getPhotoFromInput} variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>
      )}

      <div className={s.status}>
        <ProfileStatus
          match={props.match}
          status={props.status}
          fullName={props.profile.fullName}
          updateStatus={props.updateStatus}
        />
      </div>

      {editMode ? (
        <ProfileDataEditRF
          handleSubmit={onSubmit}
          toEditMode={toEditMode}
          profile={props.profile}
        />
      ) : (
        <ProfileData profile={props.profile} toEditMode={toEditMode} match={props.match} />
      )}
    </div>
  );
};

export default ProfileInfo;
