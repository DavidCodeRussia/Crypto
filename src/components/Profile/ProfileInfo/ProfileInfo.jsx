import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from ".././ProfileStatus/ProfileStatusWithHooks"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let getPhotoFromInput = (e) => {
        if(e.target.files.length) {
            props.getPhoto(e.target.files[0])
        }
    }

    return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large || "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"} />
                </div>
                {!props.match && <input type={"file"} onChange={getPhotoFromInput} />}
                <div className={s.status}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
    )

}

export default ProfileInfo;