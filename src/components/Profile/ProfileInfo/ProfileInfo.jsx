import React, {useState} from 'react'
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from ".././ProfileStatus/ProfileStatusWithHooks"
import ProfileDataEditReduxForm from "../ProfileDataEditReduxForm/ProfileDataEditReduxForm";
import ProfileData from "../ProfileData/ProfileData";

const ProfileInfo = (props) => {

    let [editMode, toEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    let getPhotoFromInput = (e) => {
        if(e.target.files.length) {
            props.getPhoto(e.target.files[0])
        }
    }

    let onSubmit = (formData) => {
        props.saveDataProfile(formData)
            .then( () => {toEditMode(false)} )
    }

    return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large || "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"} />
                </div>
                {!props.match &&
                    <div className={s.editImg}>
                        <label> Upload avatar
                            <input type={"file"} accept=".png, .jpg, .jpeg" onChange={getPhotoFromInput}/>
                        </label>
                    </div>
                }
                <div className={s.status}>
                    <ProfileStatusWithHooks match={props.match} status={props.status} updateStatus={props.updateStatus} />
                </div>
                {editMode
                    ? <ProfileDataEditReduxForm onSubmit={onSubmit} toEditMode={toEditMode}
                                                      profile={props.profile} initialValues={props.profile} />
                    : <ProfileData profile={props.profile} toEditMode={toEditMode}
                                   match={props.match} />}
            </div>
    )

}

export default ProfileInfo;