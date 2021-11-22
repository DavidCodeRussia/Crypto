import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.container}>
                {dialogsElements}
            </div>

            <div className={s.filesWithMessage}>
                    {messagesElements}
                <div className={s.forDisplayTable}>
                        <textarea></textarea>
                        <button>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;