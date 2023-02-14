import React from "react";

import s from "./WrapperForMain.module.scss";

export type TWrapperForMain = {
  children: JSX.Element[] | JSX.Element;
};

let WrapperForMain: React.FC<TWrapperForMain> = ({ children }) => {
  return <div className={s.wrapperForMain}>{children}</div>;
};

export default WrapperForMain;
