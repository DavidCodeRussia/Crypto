import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";


const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo descrription={props.profilePage.descrription}/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;