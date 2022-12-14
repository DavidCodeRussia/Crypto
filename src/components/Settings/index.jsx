import { withAuthNavigate } from "../../hoc/withAuthRedirect";
import { ComponentInBuildMode } from "../common/ComponentInBuildMode";
import WrapperForMain from "@components/common/WrapperForMain";
import s from "./Settings.module.scss";

const SettingsContainer = (props) => {
  return (
    <WrapperForMain>
      <div className={s.settings}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};

export default withAuthNavigate(SettingsContainer);
