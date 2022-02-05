import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

    /*
        shouldComponentUpdate(nextProps, nextState, nextContext) {
            return nextProps !== this.props || nextState !== this.state
        }
    */

        console.log("RENDER")

        let postsElements =
            props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)

        let onAddPost = (values) => {
            props.addPost(values.NewPostBody)
        }

        return (
            <div className={s.MyPosts}>
                My Posts
                <div className={s.post}>
                    <AddPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div className={s.post}>
                    {postsElements}
                </div>
            </div>

        )
})

let maxLengthCreator10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="NewPostBody" component={Textarea} elementType={"input"} validate={[required, maxLengthCreator10]} />
            <button>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "PostAddPostFormRedux"})(AddPostForm)

export default MyPosts;