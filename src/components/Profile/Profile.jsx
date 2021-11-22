import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo descrription={props.state.descrription}/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;