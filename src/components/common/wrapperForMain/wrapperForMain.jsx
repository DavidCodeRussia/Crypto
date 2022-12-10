import React from "react";

import s from "./wrapperForMain.module.scss";

function WrapperForMain({ children }) {
  return <div className={s.wrapperForMain}>{children}</div>;
}

export default WrapperForMain;
