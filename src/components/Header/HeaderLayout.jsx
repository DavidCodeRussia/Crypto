import { Outlet, useLocation } from "react-router-dom";

import Nav from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import s from "./HeaderLayout.module.scss";

const HeaderLayout = (props) => {
  const location = useLocation();
  const login = location?.pathname ?? null;
  console.log("location", location);

  return (
    <>
      <header className={s.header}>
        <img
          className={s.firstSrc}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
          alt=""
        />
        <div className={s.loginBlock}>
          {props.isAuth && (
            <div className={s.loginName}>
              {props.login}
              <button className={s.logoutButton} onClick={props.logout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </header>
      <div className={s.mainContent}>
        {!login && <Nav />}
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default HeaderLayout;
