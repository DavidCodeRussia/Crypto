import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo descrription={props.descrription}/>
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile;