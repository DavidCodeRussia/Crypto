import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Navigate replace to="/Login" />

    return (
        <div className={s.dialogs}>

            <div className={s.container}>
                {dialogsElements}
            </div>

            <div className={s.filesWithMessage}>
                    {messagesElements}
                <div className={s.forDisplayTable}>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;