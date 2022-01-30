import {connect} from "react-redux";
import News from "./News";
import {Navigate} from "react-router-dom";

const NewsContainer = (props) => {
    if(!props.isAuth) return <Navigate replace to="/Login" />
    return (
        <News />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(NewsContainer)

