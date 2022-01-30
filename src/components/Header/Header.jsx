import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
  <header className={s.header}>
    <img className={s.firstSrc} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png' />
    <div className={s.loginBlock}>
      {props.isAuth
          ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
  )
}

export default Header;