import React from "react";

import { ComponentInBuildMode } from "../common/ComponentInBuildMode";
import WrapperForMain from "@components/common/WrapperForMain";

import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  return (
    <WrapperForMain>
      <div className={s.dialogs}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};

export default Dialogs;
