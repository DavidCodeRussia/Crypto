import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={s.avatar}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" />
            </div>
            <div className={s.dialog}>
                <NavLink to={path} className={s.linka}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;