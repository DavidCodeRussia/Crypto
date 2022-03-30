import React from 'react'
import {withAuthNavigate} from "../../hoc/withAuthRedirect";

const FriendsContainer = (props) => {

    return (
        <div>Oops. You have no friends. Sorry</div>
    )

}
export default withAuthNavigate(FriendsContainer)