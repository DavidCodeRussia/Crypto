import MyPostsContainer from "./MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import WrapperForMain from "../../components/common/WrapperForMain";
import { TProfileProps } from "./types";

const Profile: React.FC<TProfileProps> = (props) => {
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
