import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;