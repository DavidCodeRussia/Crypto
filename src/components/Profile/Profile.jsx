import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo descrription={props.profilePage.descrription}/>
            <MyPosts posts={props.profilePage.posts}
                     profilePage={props.profilePage}
                     dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;