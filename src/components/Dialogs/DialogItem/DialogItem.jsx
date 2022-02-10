import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import user from "../../../assets/images/user.png";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className="general_div">
            <div className={s.avatar}>
                <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
            </div>
            <div className={s.dialog}>
                <NavLink to={path} className={s.linka}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;