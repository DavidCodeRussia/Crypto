import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} description={props.description} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;