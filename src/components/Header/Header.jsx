import s from './Header.module.css';

const Header = () => {
  return (
  <header className={s.header}>
    <img className={s.firstSrc} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png' />
  </header>
  )
}

export default Header;