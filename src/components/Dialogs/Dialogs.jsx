import { ReactPlayerCompoonet } from "./ReactPlayer";
import WrapperForMain from "@components/common/WrapperForMain";

import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  return (
    <WrapperForMain>
      <div className={s.dialogs}>
        {/* <ComponentInBuildMode padding /> */}
        <ReactPlayerCompoonet />
      </div>
    </WrapperForMain>
  );
};

export default Dialogs;
