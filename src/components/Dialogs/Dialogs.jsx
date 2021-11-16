import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Maga'},
        {id: 5, name: 'Vaxper'}
    ]

    let messages = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет Вася'},
        {id: 3, message: 'Как жизнь'},
        {id: 4, message: 'По тихоньку'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
    let messageElements = messages.map( m =>  <Message message={m.message} id={m.id} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;