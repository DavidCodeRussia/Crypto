import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        // let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', text: text}
        let action = updateNewMessageActionCreator(text)
        props.dispatch(action)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.container}>
                {dialogsElements}
            </div>

            <div className={s.filesWithMessage}>
                    {messagesElements}
                <div className={s.forDisplayTable}>
                        <textarea onChange={onMessageChange}
                                  ref={newMessageElement}
                                  value={props.dialogsPage.newPostMessage}
                                  style={{width: 550 + 'px'}} />
                        <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;