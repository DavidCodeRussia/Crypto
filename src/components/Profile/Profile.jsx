import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo descrription={props.profilePage.descrription}/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost={props.addPost} />
        </div>
    )
}

export default Profile;