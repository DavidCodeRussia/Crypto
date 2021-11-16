import s from './ProfileInfo.module.css';
import MyPosts from '../MyPosts/MyPosts.jsx';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.fon}>
                <img
                    src="https://st2.depositphotos.com/1007283/7112/i/600/depositphotos_71120903-stock-photo-wide-panorama-landscape-in-bavaria.jpg"/>
            </div>
            <div className={s.description}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;