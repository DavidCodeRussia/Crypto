import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    let descriptionOn = props.descrription.map( d => <div className={s.descriptionItem}>{d.question}</div> )

    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
            </div>
            <div className={s.description}>
                {descriptionOn}
            </div>
        </div>
    )
}

export default ProfileInfo;