import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
/*

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
*/
// это так, на память

let mapStateToProps = (state) => {
    return {
        descrription:  state.profilePage.descrription
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer;