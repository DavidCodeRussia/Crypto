import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.linka}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Vanya'},
        {id: 4, name: 'Magomed'},
        {id: 5, name: 'Natali'},
        {id: 6, name: 'Eduard'},
        {id: 7, name: 'Sergey'}
    ]

    let messages = [
        {id: 1, message: 'Hello Katya'},
        {id: 2, message: 'Hi Andrey'},
        {id: 3, message: 'How is it going?'},
        {id: 4, message: 'Nice and you?'}
    ]

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map ( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.container}>
                {dialogsElements}
            </div>

            <div className={s.filesWithMessage}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;