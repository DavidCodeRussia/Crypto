import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', count: 12},
        {id: 2, message: 'Im fine and you?', count: 13}
    ]

    let post = posts.map( p => <Post message={p.message} count={p.count}/>  )

    return (
        <div className={s.MyPost}>
            My posts
            <div className={s.inputPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;