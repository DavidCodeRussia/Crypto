import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        authorizedUserId={props.authorizedUserId}
        match={props.match}
        getPhoto={props.getPhoto}
        saveDataProfile={props.saveDataProfile}
      />
      <MyPostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
