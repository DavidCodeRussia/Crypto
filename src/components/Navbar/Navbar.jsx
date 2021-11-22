import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {

    let active = ({isActive}) =>
        `${isActive && `${s.active}`}`

    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to="/Profile" className={active}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/Dialogs/*" className={active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" className={active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" className={active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" className={active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <NavLink to="/Friends" className={active}>Friends</NavLink>
                </div>
                <div className={s.containerImg}>
                    <img src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"/>
                    <img src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"/>
                    <img src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;