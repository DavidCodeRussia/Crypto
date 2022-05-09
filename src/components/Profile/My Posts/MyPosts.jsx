import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = props => {

        let postsElements =
            [...props.posts].reverse().map(p => <Post profile={props.profile} key={p.id} message={p.message} likes={p.likes} />)

        let onAddPost = (values) => {
            props.addPost(values.NewPostBody)
        }

        return (
            <div className={s.MyPosts}>
                My Posts
                <div className={s.post}>
                    <AddPostFormRedux onSubmit={onAddPost} />
                </div>
                <div className={s.post}>
                    {postsElements}
                </div>
            </div>
        )
}

let maxLengthCreator10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form className={s.fieldPosts} onSubmit={props.handleSubmit}>
            <Field name="NewPostBody" component={Textarea}
                   elementType={"input"} validate={[required, maxLengthCreator10]}
                   placeholder={"Write your posts here"} className={s.nativeFieldProfile} />
            <button className={s.clearlyButton}>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "PostAddPostFormRedux"})(AddPostForm)

export default MyPosts;