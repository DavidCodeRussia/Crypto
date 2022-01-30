import s from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}

export default Message;