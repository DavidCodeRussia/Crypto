import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtewkrVIUCeAV02OKADRXrvwmrHcSYg9dpSg&usqp=CAU"/>
            {props.message}
            <div>
                <span>likes:</span> {props.count}
            </div>
        </div>
    )
}

export default Post;