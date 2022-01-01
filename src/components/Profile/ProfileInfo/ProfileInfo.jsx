import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if  (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
}

export default ProfileInfo;