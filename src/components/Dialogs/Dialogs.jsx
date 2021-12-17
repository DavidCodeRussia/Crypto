import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.sendMessage()
    }

    let onSendMessageClick = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageBody(text)
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