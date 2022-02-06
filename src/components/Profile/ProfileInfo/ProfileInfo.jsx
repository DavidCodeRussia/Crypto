import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import user from "../../../assets/images/user.png"
import ProfileStatusWithHooks from ".././ProfileStatus/ProfileStatusWithHooks"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    if (!props.profile.photos.large) {

        return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={user} />
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