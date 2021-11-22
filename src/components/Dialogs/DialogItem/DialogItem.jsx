import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className="general_div">
            <div className={s.avatar}>
                <img src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg" />
            </div>
            <div className={s.dialog}>
                <NavLink to={path} className={s.linka}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;