import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    let description = props.description.map( d => <div className={s.descriptionItem} key={d.id}>{d.question}</div> )

    if  (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.description}>
                {description}
            </div>
        </div>
    )
}

export default ProfileInfo;