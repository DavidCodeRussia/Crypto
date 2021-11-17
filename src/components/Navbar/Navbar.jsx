import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {

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
                <NavLink to="Settings" className={active}>Settings</NavLink>
            </div>

        </nav>
    )
}

export default Nav;