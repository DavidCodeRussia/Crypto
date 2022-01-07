import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import user from "../../../assets/images/user.png"
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    if  (!props.profile) {
        return <Preloader />
    }

    if (!props.profile.data.photos.large) {
        return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={user} />
                </div>
            </div>
        )
    }

    return (
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={props.profile.data.photos.large}/>
                </div>
                <ProfileStatus status={"Hello world"} />
            </div>
    )
}

export default ProfileInfo;