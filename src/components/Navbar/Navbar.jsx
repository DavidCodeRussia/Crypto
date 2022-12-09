import { NavLink } from "react-router-dom";

import s from "./Navbar.module.scss";

const Nav = (props) => {
  let active = ({ isActive }) => (isActive ? s.active : "");

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={active}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item}`}>
        <NavLink to="/dialogs/*" className={active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <div>
          <NavLink to="/friends" className={active}>
            Friends
          </NavLink>
        </div>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
