import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from ".././ProfileStatus/ProfileStatusWithHooks"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    if (!props.profile.photos.large) {

        return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        )
    }

    return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} />
                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
    )

}

export default ProfileInfo;