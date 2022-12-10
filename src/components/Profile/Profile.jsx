import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import WrapperForMain from "@components/common/WrapperForMain";

import s from "./Profile.module.scss";

const Profile = (props) => {
  return (
    <WrapperForMain>
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
    </WrapperForMain>
  );
};

export default Profile;
