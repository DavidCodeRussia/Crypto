import React from "react";

import WrapperForMain from "@components/common/WrapperForMain";

import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  return (
    <WrapperForMain>
      <div className={s.dialogs}>Hello messages</div>
    </WrapperForMain>
  );
};

export default Dialogs;
