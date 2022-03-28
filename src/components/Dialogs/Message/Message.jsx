
import s from "../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={s.messageBody}>
            <div>{props.message}</div>
        </div>
    )
}

export default Message;