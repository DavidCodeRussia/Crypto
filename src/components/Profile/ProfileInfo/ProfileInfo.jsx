import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
            </div>
            <div className={s.description}>
                <div className={s.descriptionItem}>
                    Name: David
                </div>
                <div className={s.descriptionItem}>
                    Surname: Arakelyan
                </div>
                <div className={s.descriptionItem}>
                    Owner: Bitcoin, ETH, Dogecoin ...
                </div>
                <div className={s.descriptionItem}>
                    Balance: 23647326723 $
                </div>
                <div className={s.descriptionItem}>
                     City: Saratov, Russia
                </div>
                <div className={s.descriptionItem}>
                    Years Old: 17
                </div>
                <div className={s.descriptionItem}>
                    Gender: Walmart Backpack 132P
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;