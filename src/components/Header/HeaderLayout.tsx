import { Outlet, useLocation } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { THeader } from "./types";
import Nav from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import s from "./HeaderLayout.module.scss";

const HeaderLayout: React.FC<THeader> = (props) => {
  const location = useLocation();
  const login = location?.pathname === "/login" ?? null;

  return (
    <>
      {!login && (
        <header className={s.header}>
          <div className={s.wrapper_logo}>
            <img
              className={s.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
              alt=""
            />
            <div className={s.title}>Cryptoella</div>
          </div>

          <div className={s.loginBlock}>
            {props.isAuth && (
              <div className={s.loginName}>
                <div className={s.login}>{props.login}</div>
                <Stack>
                  <Button variant="contained" onClick={props.logout}>
                    Log out
                  </Button>
                </Stack>
              </div>
            )}
          </div>
        </header>
      )}
      <div className={s.mainContent}>
        {!login && <Nav />}
        <Outlet />
      </div>
      {!login && <Footer />}
    </>
  );
};

export default HeaderLayout;
