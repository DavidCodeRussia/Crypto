import Settings from "./Settings";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";


const SettingsContainer = (props) => {
    if(!props.isAuth) return <Navigate replace to="/Login" />
    return (
        <Settings />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(SettingsContainer)