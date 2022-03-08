import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {

    let active = ({isActive}) =>
        isActive ? s.active : ""

    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to="/Profile" className={active}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/Dialogs/*" className={active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <NavLink to="/Friends" className={active}>Friends</NavLink>
                </div>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" className={active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" className={active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" className={active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;