import React, {useState} from 'react'
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from ".././ProfileStatus/ProfileStatusWithHooks"
import ProfileDataEditReduxForm from "../ProfileDataEditReduxForm/ProfileDataEditReduxForm";

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

    let Contact = ({ContactTitle, ContactValue}) => {
        return <div className={s.contacts}>{ContactTitle} {ContactValue}</div>
    }

    let onSubmit = (formData) => {
        props.saveDataProfile(formData)
            .then( () => {toEditMode(false)} )
    }

    let ProfileData = () => {

        return (
            <div className={s.information}>
                <div className={s.block1}>
                    <div><b>Full name:</b> {props.profile.fullName}</div>
                    <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}</div>
                    <div><b>Description:</b> {props.profile.lookingForAJobDescription}</div>
                    <div><b>About me: </b>{props.profile.aboutMe}</div>

                    <div><b>Contacts:</b>{ Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} ContactTitle={key} ContactValue={props.profile.contacts[key]} />
                    })}</div>
                </div>
                {!props.match &&
                <div className={s.block2}>
                    <div><button className={s.information_buttonEdit} onClick={() => {toEditMode(true)}}>edit</button></div>
                </div>
                }
            </div>
        )
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
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
                {editMode
                    ? <ProfileDataEditReduxForm onSubmit={onSubmit} toEditMode={toEditMode}
                                                      profile={props.profile} initialValues={props.profile} />
                    : <ProfileData />}
            </div>
    )

}

export default ProfileInfo;