import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        description:  state.profilePage.descrription
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer;