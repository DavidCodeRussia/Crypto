import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import user from "../../../assets/images/user.png";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className="general_div">
            <div className={s.avatar}>
                <img src={user} />
            </div>
            <div className={s.dialog}>
                <NavLink to={path} className={s.linka}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;