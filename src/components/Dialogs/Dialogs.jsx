import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsPage = props.dialogsPage

    let dialogsElements = dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageBody = dialogsPage.newMessageBody

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onSendMessageClick = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageActionCreator(text))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.container}>
                {dialogsElements}
            </div>

            <div className={s.filesWithMessage}>
                    {messagesElements}
                <div className={s.forDisplayTable}>
                        <textarea
                                  ref={newMessageElement}
                                  value={newMessageBody}
                                  onChange={onSendMessageClick}
                                  style={{width: 550 + 'px'}} />
                        <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;