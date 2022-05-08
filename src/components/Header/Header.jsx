import s from './Header.module.css';

const Header = (props) => {

  return (
  <header className={s.header}>
    <img className={s.firstSrc} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png' />
    <div className={s.loginBlock}>
      {props.isAuth &&
      <div className={s.loginName}>
        {props.login}
        <button className={s.logoutButton} onClick={props.logout}>Log out</button>
      </div>
      }
    </div>
  </header>
  )
}

export default Header;