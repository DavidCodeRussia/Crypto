import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId}
                         match={props.match} getPhoto={props.getPhoto}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;