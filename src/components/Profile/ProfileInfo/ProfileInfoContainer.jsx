import ProfileInfo from "./ProfileInfo";
import StoreContext from "../../redux/StoreContext";

const ProfileInfoContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let descrription = store.getState().profilePage.descrription

                    return <ProfileInfo descrription={descrription} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default ProfileInfoContainer;